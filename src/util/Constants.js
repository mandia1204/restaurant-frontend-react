
export const years = ['2018', '2017', '2016', '2015', '2014', '2013'];
  
export const months = [
    {name: 'Enero', value: 1},
    {name: 'Febrero', value: 2},
    {name: 'Marzo', value: 3},
    {name: 'Abril', value: 4},
    {name: 'Mayo', value: 5},
    {name: 'Junio', value: 6},
    {name: 'Julio', value: 7},
    {name: 'Agosto', value: 8},
    {name: 'Septiembre', value: 9},
    {name: 'Octubre', value: 10},
    {name: 'Noviembre', value: 11},
    {name: 'Diciembre', value: 12}
];
  
export const Ops = {
    all: 'PDD,VA,VDD,PXD,ANL,ANM',
    monthly: 'ANM',
    yearly: 'VA,ANM',
    daily: 'PDD,VDD,PXD,ANL'
};

const FieldFormat = {
    soles: 'S/${0}',
    unidades: '${0} und.'
};

export const CardOptions = {
    PRODUCCION_DIA: { title: 'Producción del día', color: 'green', format: FieldFormat.soles },
    VENTA_DIA: { title: 'Ventas del día', color: 'pink', format: FieldFormat.soles },
    PAX_DIA: { title: 'Pax del día', color: 'blue-grey', format: FieldFormat.unidades },
    TICKET_PROMEDIO_DIA: { title: 'Ticket prom. del día', color: 'purple', format: FieldFormat.soles }
};