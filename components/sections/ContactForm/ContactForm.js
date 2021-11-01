import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Input from "../../common/input/input";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yoid8dh",
        "template_tbsmko7",
        form.current,
        "user_GI8rh9mp4el9mblKdbvnU"
      )
      .then(
        () => {
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      {isSent ? (
        <p style={{ marginLeft: "auto" }}>Tu mensaje ha sido enviado.</p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className={styles.inputContainer}>
          <Input placeholder="E-mail." name="name" />
          <button className={styles.button} type="submit">
            Enviar
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
