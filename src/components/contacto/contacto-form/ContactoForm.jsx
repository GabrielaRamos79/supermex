// import React from "react";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import "./contacto-form.css";

function ContactoForm() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    emailjs.init("8FooRU2Jcz3Kb8GGN");
  }, []);

  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleCloseAlert2 = () => {
    setShowAlert2(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setShowAlert2(true);
    } else {
      const btn = event.target.querySelector("#button");
      btn.value = "Enviando...";

      const serviceID = "service_sgijj4u";
      const templateID = "template_d8xam0d";

      emailjs
        .sendForm(serviceID, templateID, event.target)
        .then(() => {
          btn.value = "Send Email";
          setShowAlert(true);
          window.location.reload();
        })
        .catch((err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        });
    }
  };

  return (
    <>
      <div className="mainTittle">
        <h2>¿Quieres enviar un mensaje a la tribu?</h2>
      </div>

      <div className="mainContainerContact">
        <div className="dataContact">
          <h3>Fábrica/Envíos</h3>
          <p>
            Pol. Ind. Las Salinas de Poniente. c/ Eratóstenes, 198.<br></br> 11500 – El
            Puerto de Santa María, Cádiz (España)
          </p>
          <h3>Dirección Postal</h3>
          <p>
            C/ Eratóstenes, 198 Módulo B – Buzón 3 <br></br>11500 – El Puerto de Santa
            María, Cádiz (España)
          </p>
          <p><h3 className="inlineData">Teléfono</h3> (34) 956 841 136</p>
          <p><h3 className="inlineData">Mail</h3> info@supermexfoods.com</p>
          
        </div>
        <div className="divFormGeneral">
          <form id="form" onSubmit={handleSubmit}>
            <div className="containerForm">
              <div className="containerFieldsLeft">
                <div className="field">
                  {/* <div className="rectangulo"></div> */}
                  <input
                    type="text"
                    className="inputField"
                    name="emailjs_name"
                    id="emailjs_name"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="field">
                  {/* <div className="rectangulo"></div> */}
                  <input
                    type="text"
                    className="inputField"
                    name="emailjs_tlf"
                    id="emailjs_tlf"
                    placeholder="Teléfono"
                  />
                </div>
                <div className="field">
                  {/* <div className="rectangulo"></div> */}
                  <input
                    type="text"
                    className="inputField"
                    placeholder="Email"
                    name="emailjs_email"
                    id="emailjs_email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  />
                </div>
                <div className="field">
                  <p>He leído y acepto la política de privacidad.</p>
                </div>
              </div>
              <div className="containerFieldsRight">
              {/* <div className="rectangulo2"></div> */}
                <div className="divTextArea">
                  <textarea
                    id="emailjs_message"
                    placeholder="Comentario"
                    className="textAreaField"
                    name="emailjs_message"
                    maxLength="150"
                    required
                  ></textarea>
                </div>
                <div className="divButton">
                  {/* <div className="rectangulo3"></div> */}
                  <input
                    type="submit"
                    id="button"
                    className="inputSub"
                    value="¡Enviar!"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      ></script>

      {showAlert && (
        <div className="custom-alert">
          <div className="custom-alert-content">
            <span>Mensaje enviado</span>
            <br></br>
            <button onClick={handleCloseAlert}>Cerrar</button>
          </div>
        </div>
      )}
      {showAlert2 && (
        <div className="custom-alert">
          <div className="custom-alert-content">
            <span>Por favor, ingresa un correo electrónico válido.</span>
            <br></br>
            <button onClick={handleCloseAlert2}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactoForm;
