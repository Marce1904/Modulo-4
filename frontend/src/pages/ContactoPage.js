import React from "react";

const ContactoPage = (props) => {
    return (

        <div>  
            <form>
            <h2 class="titulos">Contactanos</h2>
                <p>
                    <label for="">Nombre</label>
                </p>
                <p>
                    <label for="">Apellido</label>
                </p>
                <p>
                    <label  for="">e - Mail</label>
                </p>
                <p>
                    <label  for="">Teléfono</label>
                </p>
                <p>
                    <label for="">Comentario</label>
                </p>
                <ul></ul>
                <button>Enviar</button>

            </form>
        

        
                <h2>Puede encontrarnos también: </h2>
                <h2 class="texto">Otras de nuestras vías de Contacto</h2>
                <p class="texto10"><i class="fa-solid fa-envelopes-bulk"> Nuestro telefono: 2604-338133</i></p>
                <p class="texto10"><i class="fas fa-at">E-mail: marcesanchez1904@gmail.com </i></p>
        </div>

    );

}

export default ContactoPage;