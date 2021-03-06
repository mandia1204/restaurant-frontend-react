import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import DashboardActions from '../../state/actions/DashboardActions';
import Actions from '../../state/actions/AppActions';
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

class DashboardContainer extends Component<Props, any> {
  chartModelBuilder: IChartModelBuilder;

  cardModelBuilder: any;

  anulacionesFormatter: any;

  constructor(props: Props) {
    super(props);
    this.chartModelBuilder = ChartModelBuilder();
    this.cardModelBuilder = CardModelBuilder();
    this.anulacionesFormatter = AnulacionesFormatter();
  }

  componentDidMount() {
    const { appState, dispatch } = this.props;
    const filters = { ...appState.dashboardFilters, ops: Ops.all };
    dispatch(DashboardActions.Creators.fetchDashboard(filters));
    dispatch(Actions.Creators.showFilters(true));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(Actions.Creators.showFilters(false));
  }

  render() {
    const { dashboard } = this.props;
    const chartModel = this.chartModelBuilder.build(dashboard.charts);
    const cardModel = this.cardModelBuilder.build(dashboard.cards);
    const anulaciones = this.anulacionesFormatter.format(dashboard.anulaciones);
    return (
      <Dashboard chartModel={chartModel} anulaciones={anulaciones} cardModel={cardModel} />
    );
  }
}

const mapStateToProps = (state: AppStore) => {
  const { dashboard, appState } = state;
  return {
    dashboard,
    appState,
  };
};

export default connect(mapStateToProps)(DashboardContainer);
