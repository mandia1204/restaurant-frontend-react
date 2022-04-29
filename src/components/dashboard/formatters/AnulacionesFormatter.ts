import CompareArrows from '@mui/icons-material/CompareArrows';
import LocalBar from '@mui/icons-material/LocalBar';
import Keyboard from '@mui/icons-material/Keyboard';
import Error from '@mui/icons-material/Error';
import Warning from '@mui/icons-material/Warning';
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
  const getTipo = (tipo: string): string => (!propsByType.get(tipo) ? 'default' : tipo);

  const format = (anulaciones: Anulacion[]) => anulaciones.map((a) => {
    const vacio = !a.observacion ? { observacion: '<vacio>' } : { };
    return { ...a, ...propsByType.get(getTipo(a.tipo)), ...vacio };
  });

  return {
    format,
  };
};
