"use client";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    process.env.VITE_FORMSPREE_CONTACT_FORM_ID
  );

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <>
      <h1>Contact</h1>
      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom :</label>
          <input id="name" type="text" name="name" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="email">Adresse email :</label>
          <input id="email" type="email" name="email" />
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </>
  );
}

import { useForm, ValidationError } from "@formspree/react";
