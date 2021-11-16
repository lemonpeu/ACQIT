import React, { useEffect, useState } from "react";
import Input from "../../common/input/input";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ autofocus, send }) => {
  const [isSent, setIsSent] = useState(false);
  const [emailText, sendEmailText] = useState("");
  const [error, setError] = useState("");
  const [messageText, setMessageText] = useState("");

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isEmailCorrect = (e) => {
    if (!emailRegex.test(e.target.value)) {
      setError("Ingrese un e-mail correcto");
    }
    sendEmailText(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    sendData(emailText);
  };

  useEffect(() => {
    if (emailRegex.test(emailText)) {
      setError("");
    }
  }, [emailRegex, emailText]);

  // data to be sent to the POST request

  const sendData = async (email) => {
    try {
      await fetch("https://acqit.com.ar/contact/contact.php", {
        method: "POST",
        mode: "no-cors",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: "email= " + email,
      });
      setIsSent(true);
      setError("");
      setMessageText("Su mensaje ha sido enviado con éxito.");
    } catch (e) {
      setError("Intente de nuevo en unos minutos.");
    }
  };

  return (
    <div className={styles.container}>
      {isSent ? (
        <p style={{ marginLeft: "auto" }}>{messageText}.</p>
      ) : (
        <>
          <form onSubmit={sendEmail} className={styles.inputContainer}>
            <Input
              placeholder="E-mail."
              name="email"
              value={emailText}
              onChange={(e) => isEmailCorrect(e)}
              autofocus={autofocus}
            />
            <button className={styles.button} type="submit">
              {send}
            </button>
          </form>
          <p style={{ padding: 0, margin: 0, fontSize: "10px" }}>
            <em>{error}</em>
          </p>
        </>
      )}
    </div>
  );
};

export default ContactForm;
