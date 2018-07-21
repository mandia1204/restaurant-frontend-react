export default {
  charts: [
    {
      name: 'VENTAS_ANUALES',
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
      name: 'ANULACIONES_DEL_MES',
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
      name: 'PRODUCTOS_VENDIDOS_DEL_MES',
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
      name: 'MOZO_DEL_MES',
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
      name: 'PLATOS_MAS_VENDIDOS_DEL_MES',
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
    PRODUCCION_DIA: {
      value: '2500',
    },
    VENTA_DIA: {
      value: '1500',
    },
    PAX_DIA: {
      value: '58',
    },
    TICKET_PROMEDIO_DIA: {
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
      observacion: 'Cliente no le gustó la comida. Solicitó el cambio o de lo contrario no iba a cancelar su cuenta, se tuvo que acceder a su petición.',
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
