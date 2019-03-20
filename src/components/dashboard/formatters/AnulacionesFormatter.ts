import CompareArrows from '@material-ui/icons/CompareArrows';
import LocalBar from '@material-ui/icons/LocalBar';
import Keyboard from '@material-ui/icons/Keyboard';
import Error from '@material-ui/icons/Error';
import Warning from '@material-ui/icons/Warning';
import Anulacion from '../../../types/Anulacion';

const propsByType: Map<string, any> = new Map(
  [
    ['cambio', { icon: CompareArrows, color: 'green' }],
    ['derrame', { icon: LocalBar, color: 'lightBlue' }],
    ['digitación', { icon: Keyboard, color: 'indigo' }],
    ['producción', { icon: Error, color: 'red' }],
    ['default', { icon: Warning, color: 'amber' }],
  ],
);

export const AnulacionesFormatter = () => {
  const getTipo = (tipo:string): string => (!propsByType.get(tipo) ? 'default' : tipo);

  const format = (anulaciones: Anulacion[]) => anulaciones.map((a) => {
    const vacio = !a.observacion ? { observacion: '<vacio>' } : { };
    return Object.assign({ ...a }, propsByType.get(getTipo(a.tipo)), vacio);
  });

  return {
    format,
  };
};
