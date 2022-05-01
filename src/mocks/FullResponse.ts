import { Charts, Cards } from '../util/Constants';
import { DashboardModel } from '../types/Dashboard';

const dashboard: DashboardModel = {
  charts: [
    {
      name: Charts.ventasAnuales,
      data: {
        2016: {
          Septiembre: 70611,
          Marzo: 42356,
          Diciembre: 66843,
          Junio: 61640,
          Julio: 73136,
          Enero: 42479,
          Octubre: 55396,
          Abril: 54790,
          Mayo: 58968,
          Febrero: 38636,
          Noviembre: 45015,
          Agosto: 61566,
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
          PAM: 94,
          'Pane all Aglio Speciale': 67,
          'Pizza Hawaiana': 48,
          'Pizza Americana': 45,
          'Pizza 4 Stagioni': 40,
          'Salsa Alfredo': 34,
          'Pane all Aglio': 30,
          'Salsa Bolognesa': 28,
          'Pizza Nazionale': 26,
          'helado de cumpleaños': 22,
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
      observacion: 'no pasa naa',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'derrame',
      observacion: 'Se le cayó al cliente el vaso.',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'digitación',
      observacion: 'error digitación',
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
      observacion: 'Cliente no le gustó la comida. Solicitó el cambio o de lo contrario no iba a cancelar su cuenta, se tuvo que acceder a su petición.', //eslint-disable-line
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
