"use client";

import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const formKey = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID || "";
  const [state, handleSubmit] = useForm(formKey);

  if (state.succeeded) {
    return <p>Message envoyé avec succèss !</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom :</label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">Adresse email :</label>
      <input id="email" type="email" name="email" />
      <label htmlFor="message">Message :</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </>
  );
}
