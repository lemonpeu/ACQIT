import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Input from "../../common/input/input";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail} className={styles.inputContainer}>
      <Input placeholder="E-mail." name="name" />
      <button className={styles.button} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
