import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { NavLink } from "react-router-dom";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      username: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .sendForm("servizio", "template", e.target,"r3hs20T_yzzly70un")
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitSuccess(true);
          clearForm();
          // Nasconde il riquadro di successo dopo 3 secondi
          setTimeout(() => {
            setIsSubmitSuccess(false);
          }, 3000); // 3000 millisecondi (3 secondi)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Banner _data={bannerData.contact} />

      <div className="section-full p-t110 p-b80 sx-bg-white sx-ourteam-outer ">
        <div className="container">
          <div className="section-content">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12  m-b30">
                <div className="contact-info">
                  <div className="section-head left">
                    <div className="sx-head-s-title">Contattaci</div>
                    <div className="sx-head-l-title">
                      <h2 className="sx-title">Informazioni di contatto</h2>
                    </div>
                  </div>
                  <div id="contattipane" className="container">
                                    <div id="contattipane" className="contactdiv">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-email-2" /></span>
                                            </div>
                                            <div className="icon-content2">
                                                <h4 className="sx-tilte">Info</h4>
                                                <p> <span class="parola-grande">Cell:</span>              327 5875963 <br></br>
                                                <span class="parola-grande">E-mail: </span>            info@scanteq.com<br></br>
                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="contattipane" className="contactdiv">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-email-1" /></span>
                                            </div>
                                            <div className="icon-content2">
                                                <h4 className="sx-tilte">Dati utili alle aziende </h4>
                                                <p><span class="parola-grande">Ragione sociale:</span>    Scanteq Srl <br></br>
                                                <span class="parola-grande">Sede legale:  </span>    Via XXIV Maggio 28, 10024 Moncalieri (TO)<br></br>
                                                <span class="parola-grande">Sede secondaria: </span>   Via San Luigi 13/B, 10043 Orbassano (TO)<br></br>
                                                <span class="parola-grande">Codice fiscale:  </span>   12544460012<br></br>
                                                <span class="parola-grande">R.E.A.:     </span>        TO - 1298098<br></br>
                                                <span class="parola-grande">Fatturazione elettronica:</span>    USAL8PV<br></br>
                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 m-b30">
                <div className="contact-home1-right">
                  <div className="contact-home-1-form sx-bg-light">
                    <h4 className="sx-title">Mettiti in contatto</h4>
                    <p>(Lasciare in "Messaggio" sia email che numero di telefono)</p>
                    {isSubmitSuccess ? (
                      <div className="alert alert-success">
                        Il messaggio è stato inviato con successo!
                      </div>
                    ) : (
                      <form
                        className="cons-contact-form2 form-transparent"
                        method="post"
                        onSubmit={handleSubmit}
                      >
                        <div className="input input-animate">
                          <input
                            type="text"
                            name="username"
                            id="name"
                            required
                            placeholder="Nome"
                            onChange={handleChange}
                            value={formData.username}
                          />
                          <span className="spin" />
                        </div>
                        <div className="input input-animate">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Email"
                            onChange={handleChange}
                            value={formData.email}
                          />
                          <span className="spin" />
                        </div>
                        <div className="input input-animate">
                          <input
                            type="text"
                            name="phone"
                            id="Phone"
                            required
                            placeholder="Numero di telefono"
                            onChange={handleChange}
                            value={formData.phone}
                          />
                          <span className="spin" />
                        </div>
                        <div className="input textarea input-animate">
                          <textarea
                            name="message"
                            id="message"
                            required
                            placeholder="Messaggio"
                            onChange={handleChange}
                            value={formData.message}
                          />
                          <span className="spin" />
                        </div>
                        <div className="sx-btn-center text-center p-t10">
                          <button
                            type="submit"
                            className="site-button sx-btn-primary icon sx-btn-lg"
                          >
                            <i className="fa  fa-long-arrow-right" />
                            Invia messaggio
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage