let ready = () => {
    console.log('DOM está listo')
    debugger
}

let loaded = () => {
    let myform = document.getElementById('form');

    myform.addEventListener('submit', (eventSubmit) => {
        eventSubmit.preventDefault();

        // Asignar referencia al elemento email
        let emailElement = document.querySelector('.form-control-lg');
        
        // Obtener el valor del elemento email
        let emailText = emailElement.value;

        // Verificar la longitud del valor del email
        if (emailText.length === 0) {
            // Llevar el enfoque al elemento email
            emailElement.focus();
            emailElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                }
            )
        } else {
            // Aquí puedes agregar la lógica adicional si el email es válido
            console.log('Email válido:', emailText);
        }
        
    });
};

// Asegúrate de que el evento load llame a la función loaded
window.onload = loaded;

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)