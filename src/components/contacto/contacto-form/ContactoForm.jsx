// import React from "react";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import "./contacto-form.css";
import startIcon from "./startIcon.png";

function ContactoForm() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //   if (!emailRegex.test(email)) {
  //     setShowAlert2(true);
  //   } else {
  //     const btn = event.target.querySelector("#button");
  //     btn.value = "Enviando...";

  //     const serviceID = "service_sgijj4u";
  //     const templateID = "template_d8xam0d";

  //     emailjs
  //       .sendForm(serviceID, templateID, event.target)
  //       .then(() => {
  //         btn.value = "Send Email";
  //         setShowAlert(true);
  //         window.location.reload();
  //       })
  //       .catch((err) => {
  //         btn.value = "Send Email";
  //         alert(JSON.stringify(err));
  //       });
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      alert("Debes aceptar la política de privacidad.");
      return;
    }

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
          // window.location.reload();
        })
        .catch((err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        });
    }
  };

  return (
    <>
      {/* <div className="mainTittle">
        <h2>¿Quieres enviar un mensaje a la tribu?</h2>
      </div> */}
      <img src={startIcon} alt="Start Icon" id="icon1"></img>
      <div className="mainContainerContact">
        <div className="dataContact">
          <h3>Fábrica/Envíos</h3>
          <p>
            Pol. Ind. Las Salinas de Poniente. c/ Eratóstenes, 198.<br></br>{" "}
            11500 – El Puerto de Santa María, Cádiz (España)
          </p>
          <hr></hr>
          <h3>Dirección Postal</h3>
          <p>
            C/ Eratóstenes, 198 Módulo B – Buzón 3 <br></br>11500 – El Puerto de
            Santa María, Cádiz (España)
          </p>
          <div className="dataContactDown">
            <div className="contactRow">
              <h3 className="inlineData">Teléfono</h3>
              <span className="phoneEmail">(34) 956 841 136</span>
            </div>
            <div className="contactRow">
              <h3 className="inlineData">Mail</h3>
              <span className="phoneEmail">info@supermexfoods.com</span>
            </div>
          </div>
        </div>

        <div className="divFormGeneral">
          <form id="form" onSubmit={handleSubmit}>
            <div className="mainTittle">
              <h2>¿Quieres enviar un mensaje a la tribu?</h2>
            </div>
            <div className="containerForm">
              <div className="containerFieldsLeft">
                <div className="field">
                  {/* <div className="rectangulo"></div> */}
                  <input
                    type="text"
                    className="inputField"
                    name="emailjs_name"
                    id="emailjs_name"
                    placeholder="Nombre *"
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
                    placeholder="Email *"
                    name="emailjs_email"
                    id="emailjs_email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  />
                </div>
                <div className="field1">
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    He leído y acepto la política de privacidad.
                  </label>
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
