
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
  all: 'PDD,VA,VDD,PXD,ANL,ANM,PVM',
  monthly: 'ANM',
  yearly: 'VA,ANM',
  daily: 'PDD,VDD,PXD,ANL',
};

const FieldFormat = {
  soles: 'S/${0}', // eslint-disable-line no-template-curly-in-string
  unidades: '${0} und.', // eslint-disable-line no-template-curly-in-string
};

export const CardOptions = {
  PRODUCCION_DIA: { title: 'Producción del día', color: 'deepOrange', format: FieldFormat.soles },
  VENTA_DIA: { title: 'Ventas del día', color: 'purple', format: FieldFormat.soles },
  PAX_DIA: { title: 'Pax del día', color: 'green', format: FieldFormat.unidades },
  TICKET_PROMEDIO_DIA: { title: 'Ticket prom. del día', color: 'blueGrey', format: FieldFormat.soles },
};

export const tokenKey = 'AUTH_TOKEN';
