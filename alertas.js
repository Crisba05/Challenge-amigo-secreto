
// SISTEMA DE ALERTAS - alertas.js
const Alertas = {

    colores: {
        primario: '#fe652b',
        secundario: '#6c757d',
        peligro: '#dc3545',
        exito: '#28a745',
        advertencia: '#ffc107'
    },

    // Alerta de campo vacío
    campoVacio() {
        return Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, inserte un nombre.',
            confirmButtonText: 'OK',
            confirmButtonColor: this.colores.primario
        });
    },

    // Alerta de nombre duplicado
    nombreDuplicado(nombre) {
        return Swal.fire({
            icon: 'warning',
            title: 'Nombre duplicado',
            text: `"${nombre}" ya está en la lista.`,
            confirmButtonText: 'OK',
            confirmButtonColor: this.colores.primario
        });
    },

    // Alerta de lista vacía para sortear
    listaVaciaSortear() {
        return Swal.fire({
            icon: 'warning',
            title: 'Lista vacía',
            text: 'Agrega al menos un nombre antes de sortear.',
            confirmButtonText: 'OK',
            confirmButtonColor: this.colores.primario
        });
    },

    // Alerta de confirmación para eliminar amigo
    confirmarEliminarAmigo(nombreAmigo) {
        return Swal.fire({
            title: '¿Eliminar amigo?',
            text: `¿Estás seguro de que quieres eliminar a "${nombreAmigo}" de la lista?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: this.colores.peligro,
            cancelButtonColor: this.colores.secundario
        });
    },

    // Alerta de amigo eliminado exitosamente
    amigoEliminado(nombreAmigo) {
        return Swal.fire({
            icon: 'success',
            title: 'Eliminado',
            text: `"${nombreAmigo}" ha sido eliminado de la lista.`,
            timer: 1500,
            showConfirmButton: false
        });
    },

    // Alerta de amigo sorteado
    amigoSorteado(nombreAmigo) {
        return Swal.fire({
            icon: 'success',
            title: '¡Amigo sorteado!',
            html: `<div style="font-size: 18px;">🎉 <strong style="color: #05DF05; font-size: 24px;">${nombreAmigo}</strong> es el amigo secreto 🎉</div>`,
            confirmButtonText: 'OK',
            confirmButtonColor: this.colores.primario
        });
    },

    // Alerta cuando no hay nada que reiniciar
    nadaQueReiniciar() {
        return Swal.fire({
            icon: 'info',
            title: 'Nada que reiniciar',
            text: 'La lista ya está vacía.',
            confirmButtonText: 'OK',
            confirmButtonColor: this.colores.primario
        });
    },

    // Alerta de confirmación para reiniciar juego
    confirmarReinicio() {
        return Swal.fire({
            title: '¿Reiniciar juego?',
            text: 'Se vaciará la lista y el resultado. ¿Deseas continuar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, reiniciar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: this.colores.primario,
            cancelButtonColor: this.colores.secundario
        });
    },

    // Alerta de reinicio exitoso
    reinicioExitoso() {
        return Swal.fire({
            icon: 'success',
            title: '¡Reiniciado!',
            text: 'El juego ha sido reiniciado correctamente.',
            timer: 1500,
            showConfirmButton: false
        });
    },

    // Alerta de amigo agregado exitosamente (opcional)
    amigoAgregado(nombreAmigo) {
        return Swal.fire({
            icon: 'success',
            title: 'Amigo agregado',
            text: `"${nombreAmigo}" ha sido agregado a la lista.`,
            timer: 1200,
            showConfirmButton: false,
            position: 'top-end',
            toast: true
        });
    },

    // Alerta personalizada genérica
    personalizada(configuracion) {
        const configDefault = {
            confirmButtonColor: this.colores.primario,
            cancelButtonColor: this.colores.secundario
        };
        
        return Swal.fire({
            ...configDefault,
            ...configuracion
        });
    }
};