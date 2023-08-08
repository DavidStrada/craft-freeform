<?php

namespace Solspace\Freeform\Library\Integrations;

use GuzzleHttp\Client;
use Solspace\Freeform\Library\Exceptions\Integrations\IntegrationException;

interface APIIntegrationInterface
{
    /**
     * Check if it's possible to connect to the API.
     *
     * @throws IntegrationException
     */
    public function checkConnection(Client $client): bool;

    public function getApiRootUrl(): string;
}
