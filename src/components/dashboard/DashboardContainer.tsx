import React, { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { showFilters } from '../../state/reducers/AppSlice';
import { fetchDashboard } from '../../state/reducers/DashboardSlice';
import { ChartModelBuilder } from './builders/ChartModelBuilder';
import { CardModelBuilder } from './builders/CardModelBuilder';
import { AnulacionesFormatter } from './formatters/AnulacionesFormatter';
import { Ops } from '../../util/Constants';
import Dashboard from './Dashboard';
import { AppState, AppStore } from '../../types/AppStore';
import { DashboardModel, IChartModelBuilder } from '../../types/Dashboard';

interface Props {
  dispatch: Dispatch<any>;
  appState: AppState;
  dashboard: DashboardModel;
}

const chartModelBuilder: IChartModelBuilder = ChartModelBuilder();
const cardModelBuilder = CardModelBuilder();
const anulacionesFormatter = AnulacionesFormatter();

function DashboardContainer(props: Props) {
  const { appState, dispatch } = props;
  useEffect(() => {
    const filters = { ...appState.dashboardFilters, ops: Ops.all };
    dispatch(fetchDashboard(filters));
    dispatch(showFilters(true));

    return () => {
      dispatch(showFilters(false));
    };
  }, []);

  const { dashboard } = props;
  const chartModel = chartModelBuilder.build(dashboard.charts);
  const cardModel = cardModelBuilder.build(dashboard.cards);
  const anulaciones = anulacionesFormatter.format(dashboard.anulaciones);

  return (
    dashboard.charts.length === 0 ? <div>loading...</div>
      : <Dashboard chartModel={chartModel} anulaciones={anulaciones} cardModel={cardModel} />
  );
}

const mapStateToProps = (state: AppStore) => {
  const { dashboard, appState } = state;
  return {
    dashboard,
    appState,
  };
};

export default connect(mapStateToProps)(DashboardContainer);
