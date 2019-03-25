import Anulacion from './Anulacion';

export interface DashboardModel {
  charts: DashboardChart[];
  cards: DashboardCard;
  anulaciones: Anulacion[];
}

export interface DashboardChart{
  name: string;
  data: DashboardData;
}

export interface DashboardData{
  [key: string]: {
    [key: string]: number;
  };
}

export interface DashboardCard{
  [key: string]: {
    value: string | number;
  };
}

export interface ChartModel{
  ventasAnuales: any;
  anulacionesDelMes: any;
  productosVendidosMes: any;
  mozoDelMes: any;
  platosMasVendidosMes: any;
}

export interface IChartModelBuilder{
  build: (charts: DashboardChart[]) => ChartModel;
}

export interface ChartModelBuilderFactory{
  (): IChartModelBuilder;
}
