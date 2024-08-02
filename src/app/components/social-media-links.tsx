'use client'

import type { NextPage } from "next";
import EmailAddress from "./email-address";
import styles from "../styles/social-media-links.module.css";
import { useState } from "react";

const SocialMediaLinks: NextPage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      const response = await fetch((event.target as HTMLFormElement).action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        const result = await response.json();
        setMessage(result.error.map((error: { message: string }) => error.message).join(', '));
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error al enviar el formulario');
    }
  };
  
  return (
    <section className={styles.socialMediaLinks}>
      <div className={styles.socialMediaLinksChild} />
      <div className={styles.helpCenterFrame}>
        <img
          className={styles.helpCenterFrameChild}
          loading="lazy"
          alt=""
          src="/form.svg"
        />
        <div className={styles.contactUsFrame}>
          <div className={styles.submitButton}>
            <div className={styles.riskMitigation}>
              <h1 className={styles.contactUs}>Contact us</h1>
              <div className={styles.useTheForm}>
                Use the form below to contact us. Please be as detailed and
                precise as possible.
              </div>
            </div>
            
            <form action="https://formspree.io/f/mlevjnkn" className="w-100" method="POST" onSubmit={handleSubmit}>
              <label className="name">Name</label>
              <input placeholder="Your Name" type="text" id="name" name="name" className={styles.input}/>
              <label className="Email">Email address</label>
              <input placeholder="Your E-mail" type="email" id="email" name="email" className={styles.input}/>
              <label className="Message">Message</label>
              <textarea placeholder="Your Message" typeof="text" id="Message" name="Message" className={`${styles.input} ${styles.textarea}`} />
              <button className={styles.button}>Submit</button>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
