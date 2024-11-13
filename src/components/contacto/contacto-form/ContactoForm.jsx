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
      <div className="mainContainerContact">
        <div className="dataContact">
          <p>datos de contacto blalala alalala alalalalala</p>
        </div>
        <div className="testt">
          <form id="form" onSubmit={handleSubmit}>
            <div className="containerForm">
              {/* <div className="mainContainerForm"> */}
              <div className="containerFieldsLeft">
                <div className="field">
                  <div className="rectangulo"></div>
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
                  <div className="rectangulo"></div>
                  <input
                    type="text"
                    className="inputField"
                    name="emailjs_tlf"
                    id="emailjs_tlf"
                    placeholder="Teléfono"
                  />
                </div>
                <div className="field">
                  <div className="rectangulo"></div>
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
              </div>
              <div className="containerFieldsRight">
                <div className="field2">
                  {/* <div className="rectangulo"></div> */}
                  <textarea
                    id="emailjs_message"
                    placeholder="Comentario"
                    className="inputField2 textAreaField"
                    name="emailjs_message"
                    maxLength="300"
                    required
                  ></textarea>

                  {/* <div className="rectangulo"></div> */}
                  <input
                    type="submit"
                    id="button"
                    className="inputSub"
                    value="Enviar Email"
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
