import { Charts } from '../../../util/Constants';

export const ChartColors = {
  line: ['red', 'purple', 'blue'],
  bar: ['red', 'blue', 'yellow', 'pink', 'orange', 'teal', 'cyan', 'purple', 'light-blue', 'indigo', 'grey', 'deep-orange', 'amber', 'brown', 'light-green', 'lime'],
  pie: ['blue', 'red', 'green', 'purple'],
};

export const ChartOptionsConfig = {
  [Charts.ventasAnuales]: { title: { text: 'Ventas anuales', position: 'left' } },
  [Charts.anulacionesDelMes]: { title: { text: 'Anulaciones del mes', position: 'top' } },
  [Charts.productosVendidosMes]: { title: { text: 'Productos vendidos', position: 'top' } },
  [Charts.mozoDelMes]: { title: { text: 'Mozo del mes', position: 'left' } },
  [Charts.platosMasVendidosMes]: { title: { text: 'Plato del mes', position: 'right' } },
};
