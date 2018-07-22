
export const years = ['2018', '2017', '2016', '2015', '2014', '2013'];

export const months = [
  { name: 'Enero', value: 1 },
  { name: 'Febrero', value: 2 },
  { name: 'Marzo', value: 3 },
  { name: 'Abril', value: 4 },
  { name: 'Mayo', value: 5 },
  { name: 'Junio', value: 6 },
  { name: 'Julio', value: 7 },
  { name: 'Agosto', value: 8 },
  { name: 'Septiembre', value: 9 },
  { name: 'Octubre', value: 10 },
  { name: 'Noviembre', value: 11 },
  { name: 'Diciembre', value: 12 },
];

export const Ops = {
  all: 'PDD,VA,VDD,PXD,ANL,ANM,PVM,PMV,TPD',
  monthly: 'ANM,PMV',
  yearly: 'VA,ANM',
  daily: 'PDD,VDD,PXD,ANL,TPD',
};

const FieldFormat = {
  soles: 'S/${0}', // eslint-disable-line no-template-curly-in-string
  unidades: '${0} und.', // eslint-disable-line no-template-curly-in-string
};

export const Charts = {
  ventasAnuales: 'ventasAnuales',
  anulacionesDelMes: 'anulacionesDelMes',
  productosVendidosMes: 'productosVendidosMes',
  mozoDelMes: 'mozoDelMes',
  platosMasVendidosMes: 'platosMasVendidosMes',
};

export const Cards = {
  produccionDia: 'produccionDia',
  ventaDia: 'ventaDia',
  paxDia: 'paxDia',
  ticketPromedioDia: 'ticketPromedioDia',
};

export const CardOptions = {
  [Cards.produccionDia]: { title: 'Producción del día', color: 'deepOrange', format: FieldFormat.soles },
  [Cards.ventaDia]: { title: 'Ventas del día', color: 'purple', format: FieldFormat.soles },
  [Cards.paxDia]: { title: 'Pax del día', color: 'green', format: FieldFormat.unidades },
  [Cards.ticketPromedioDia]: { title: 'Ticket prom. del día', color: 'blueGrey', format: FieldFormat.soles },
};

export const tokenKey = 'AUTH_TOKEN';
