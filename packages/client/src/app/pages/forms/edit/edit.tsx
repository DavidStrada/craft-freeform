import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contextActions } from '@editor/store/slices/context';
import { formActions } from '@editor/store/slices/form';
import { fieldActions } from '@editor/store/slices/layout/fields';
import { layoutActions } from '@editor/store/slices/layout/layouts';
import {
  useQueryFormSettings,
  useQuerySingleForm,
} from '@ff-client/queries/forms';
import { useQueryFormIntegrations } from '@ff-client/queries/integrations';
import {
  useNotificationQueryReset,
  useQueryFormNotifications,
} from '@ff-client/queries/notifications';
import { useQueryFormRules } from '@ff-client/queries/rules';

import { Builder } from './builder/builder';
import { LoaderBuilder } from './builder/builder.loader';
import { pageActions } from './store/slices/layout/pages';
import { rowActions } from './store/slices/layout/rows';
import { notificationActions } from './store/slices/notifications';
import { addNewPage } from './store/thunks/pages';
import { useAppDispatch } from './store';

type RouteParams = {
  formId: string;
};

export const Edit: React.FC = () => {
  const { formId } = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const resetNotifications = useNotificationQueryReset();

  useQueryFormSettings();
  const { isFetching: integrationsFetching } = useQueryFormIntegrations(
    formId && Number(formId)
  );
  const { isFetching: rulesFetching } = useQueryFormRules(
    formId && Number(formId)
  );
  const { isFetching: notificationsFetching } = useQueryFormNotifications(
    formId && Number(formId)
  );
  const { data, isFetching, isError, error } = useQuerySingleForm(
    formId && Number(formId)
  );

  useEffect(() => {
    if (formId === undefined || !data) return;

    const {
      layout: { fields, pages, layouts, rows },
    } = data;

    dispatch(formActions.update(data));
    dispatch(fieldActions.set(fields));
    dispatch(pageActions.set(pages));
    dispatch(layoutActions.set(layouts));
    dispatch(rowActions.set(rows));

    document.title = data.name;

    resetNotifications();
    dispatch(notificationActions.clear());

    if (pages.length === 0) {
      dispatch(addNewPage());
    } else {
      dispatch(contextActions.setPage(pages.find(Boolean)?.uid));
    }
  }, [data, formId]);

  if (
    isFetching ||
    integrationsFetching ||
    rulesFetching ||
    notificationsFetching
  ) {
    return <LoaderBuilder />;
  }

  if (isError) {
    return <div>ERROR: {error.message as string}</div>;
  }

  return <Builder />;
};
