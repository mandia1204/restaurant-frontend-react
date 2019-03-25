import { Charts, Cards } from '../../util/Constants';
import { DashboardModel } from '../../types/Dashboard';

const dashboard: DashboardModel = {
  charts: [
    {
      name: Charts.ventasAnuales,
      data: {
        2016: {
          Septiembre: 1500,
          Marzo: 2000,
          Diciembre: 2500,
          Junio: 3500,
          Julio: 4000,
          Enero: 5000,
          Octubre: 6000,
          Abril: 7000,
          Mayo: 8000,
          Febrero: 9000,
          Noviembre: 10000,
          Agosto: 10500,
        },
        2017: {
          Septiembre: 1000.11,
          Marzo: 2000.22,
          Diciembre: 3000.33,
          Junio: 4000.44,
          Julio: 5000.55,
          Enero: 6000.66,
          Octubre: 7000.77,
          Abril: 8000.88,
          Mayo: 9000.99,
          Febrero: 10000,
          Noviembre: 11000,
          Agosto: 15000,
        },
      },
    },
    {
      name: Charts.anulacionesDelMes,
      data: {
        Mayo: {
          otro: 15,
          digitación: 20,
          'falta producción': 6,
          derrame: 10,
          cambio: 16,
        },
      },
    },
    {
      name: Charts.productosVendidosMes,
      data: {
        Mayo: {
          alimentos: 4500,
          bebidas: 1000,
          postres: 800,
          otros: 200,
        },
      },
    },
    {
      name: Charts.mozoDelMes,
      data: {
        Mayo: {
          marcos: 100,
          salvatore: 90,
          maria: 80,
          juan: 70,
          carmen: 60,
        },
      },
    },
    {
      name: Charts.platosMasVendidosMes,
      data: {
        Mayo: {
          ceviche: 1500,
          causa: 1200,
          'papa rellena': 1000,
          'seco de carne': 900,
          'lomo saltado': 870,
        },
      },
    },
  ],
  cards: {
    [Cards.produccionDia]: {
      value: '2500',
    },
    [Cards.ventaDia]: {
      value: '1500',
    },
    [Cards.paxDia]: {
      value: '58',
    },
    [Cards.ticketPromedioDia]: {
      value: '177',
    },
  },
  anulaciones: [
    {
      fecha: '29/06 13:13',
      tipo: 'otro',
      observacion: '',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'derrame',
      observacion: 'Se le cayó al cliente el vaso.',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'digitación',
      observacion: '',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'otro',
      observacion: 'Un problema con la cuenta.',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'digitación',
      observacion: 'No se escribió bien.',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'otro',
      observacion: 'Cliente no le gustó la comida. Solicitó el cambio...',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'producción',
      observacion: 'No llegó el camión a tiempo.',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'digitación',
      observacion: '',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'derrame',
      observacion: '',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'cambio',
      observacion: 'Se confundió de plato.',
    },
  ],
};

export default dashboard;
