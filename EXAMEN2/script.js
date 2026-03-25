
document.addEventListener('DOMContentLoaded', () => 
{
    

    const inputBuscador = document.getElementById('buscador');
    const cajas = document.querySelectorAll('.box');

 
    inputBuscador.addEventListener('input', (evento) => {
      
        const textoBusqueda = evento.target.value.toLowerCase();

       
        cajas.forEach(caja => {
            
            const textoCaja = caja.textContent.toLowerCase();

            
            if (textoCaja.includes(textoBusqueda)) {
                caja.style.display = 'block'; 
            } else {
                caja.style.display = 'none'; 
            }
        });
    });
});