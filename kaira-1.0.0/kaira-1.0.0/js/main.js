const databaseURL ="https://landing-50966-default-rtdb.firebaseio.com/coleccion.json";

let sendData = ( ) => {  

    // Obtén los datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // Convierte FormData a objeto
    data['saved'] = new Date().toLocaleString('es-CO', { timeZone: 'America/Guayaquil' })

    fetch(databaseURL, {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        body: JSON.stringify(data) // Convierte los datos a JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json(); // Procesa la respuesta como JSON
    })
    .then(result => {
        alert('Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces'); // Maneja la respuesta con un mensaje
        form.reset()
    })
    .catch(error => {
        alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
    });
}

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
            return;
        } else {
            // Aquí puedes agregar la lógica adicional si el email es válido
            console.log('Email válido:', emailText);
            
        }
        sendData();
    });
};

// Asegúrate de que el evento load llame a la función loaded
window.onload = loaded;

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)