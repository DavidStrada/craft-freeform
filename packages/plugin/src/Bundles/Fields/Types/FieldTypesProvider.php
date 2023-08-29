<?php

namespace Solspace\Freeform\Bundles\Fields\Types;

use Solspace\Freeform\Attributes\Field\Type;
use Solspace\Freeform\Attributes\Property\Section;
use Solspace\Freeform\Bundles\Attributes\Property\PropertyProvider;
use Solspace\Freeform\Bundles\Attributes\Property\SectionProvider;
use Solspace\Freeform\Bundles\Fields\ImplementationProvider;
use Solspace\Freeform\Fields\FieldInterface;
use Solspace\Freeform\Library\DataObjects\FieldPropertySection;
use Solspace\Freeform\Library\DataObjects\FieldType;
use Solspace\Freeform\Library\Exceptions\FieldExceptions\InvalidFieldTypeException;
use yii\base\Event;

class FieldTypesProvider
{
    public const EVENT_REGISTER_FIELD_TYPES = 'register-field-types';

    /** @var FieldType[] */
    private ?array $fieldTypes = null;

    /** @var FieldPropertySection[] */
    private ?array $sections = null;

    public function __construct(
        private PropertyProvider $propertyProvider,
        private ImplementationProvider $implementationProvider,
        private SectionProvider $sectionProvider,
    ) {
    }

    public function getRegisteredTypes(): array
    {
        $event = new RegisterFieldTypesEvent();
        Event::trigger(self::class, self::EVENT_REGISTER_FIELD_TYPES, $event);

        return $event->getTypes();
    }

    public function getSections(): array
    {
        if (null === $this->sections) {
            $types = $this->getRegisteredTypes();

            $list = $this->sectionProvider->getSections(...$types);

            $hasDefaultSection = false;
            foreach ($list as $section) {
                if (null === $section->handle) {
                    $hasDefaultSection = true;

                    break;
                }
            }

            if (!$hasDefaultSection) {
                $list = [
                    new Section(
                        null,
                        'Configuration',
                        file_get_contents(__DIR__.'/../../../Fields/SectionIcons/gears.svg'),
                        0
                    ),
                    ...$list,
                ];
            }

            $this->sections = array_values($list);
        }

        return $this->sections;
    }

    public function getTypes(): array
    {
        if (null === $this->fieldTypes) {
            $types = $this->getRegisteredTypes();

            $this->fieldTypes = array_filter(
                array_map(
                    fn ($class) => $this->createFieldType($class),
                    $types
                )
            );
        }

        return $this->fieldTypes;
    }

    public function getTypeShorthands(): array
    {
        return array_map(
            fn (FieldType $type) => $type->getType(),
            $this->getTypes()
        );
    }

    private function createFieldType(string $typeClass): ?FieldType
    {
        $reflection = new \ReflectionClass($typeClass);
        if (!$reflection->implementsInterface(FieldInterface::class)) {
            return null;
        }

        /** @var Type $type */
        $typeAttribute = $reflection->getAttributes(Type::class)[0] ?? null;
        if (!$typeAttribute) {
            throw new InvalidFieldTypeException("Field type definition invalid for '{$typeClass}'");
        }

        /** @var Type $typeInstance */
        $typeInstance = $typeAttribute->newInstance();

        $type = new FieldType();
        $type->typeClass = $typeClass;
        $type->type = $typeInstance->typeShorthand;
        $type->name = $typeInstance->name;
        $type->icon = file_get_contents($typeInstance->iconPath);
        $type->previewTemplate = $typeInstance->previewTemplatePath ? file_get_contents($typeInstance->previewTemplatePath) : null;
        $type->implements = $this->implementationProvider->getImplementations($typeClass);
        $type->properties = $this->propertyProvider->getEditableProperties($typeClass);

        return $type;
    }
}
