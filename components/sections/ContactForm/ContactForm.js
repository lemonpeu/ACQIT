import React, { useState } from "react";
import Input from "../../common/input/input";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [emailText, sendEmailText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    sendData(emailText);
  };

  // data to be sent to the POST request

  const sendData = async (email) => {
    try {
      const response = await fetch("https://acqit.com.ar/contact/contact.php", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: "email= " + email,
      });
      console.log("Response", response);
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <>
      {isSent ? (
        <p style={{ marginLeft: "auto" }}>Tu mensaje ha sido enviado.</p>
      ) : (
        <form onSubmit={sendEmail} className={styles.inputContainer}>
          <Input
            placeholder="E-mail."
            name="email"
            value={emailText}
            onChange={(e) => sendEmailText(e.target.value)}
          />
          <button className={styles.button} type="submit">
            Enviar
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
