import Anulacion from './Anulacion';

export interface Dashboard {
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
