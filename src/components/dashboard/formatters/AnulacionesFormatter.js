const propsByType = {
    'cambio': { icon: 'compare_arrows', color: 'green'},
    'derrame': { icon: 'local_bar', color: 'light-blue'},
    'digitación': { icon: 'keyboard', color: 'black'},
    'producción': { icon: 'error', color: 'red'},
    'default': { icon: 'warning', color: 'amber'}
};

export const AnulacionesFormatter = () => {
    const getTipo = (tipo) => propsByType[tipo] === undefined ? 'default' : tipo;
    
    const format = (anulaciones) => {
        return anulaciones.map(a => {
            const vacio = !a.observacion ? { observacion: '<vacio>'} : { };
            return Object.assign({...a},  propsByType[getTipo(a.tipo)], vacio);
        });
    };

    return {
        format: format
    };
};