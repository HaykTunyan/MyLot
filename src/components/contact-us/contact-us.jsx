import React, { useState } from 'react';
import AboutTop from '../../assets/images/AboutUs/About_top.png';
import AboutUnder from '../../assets/images/AboutUs/About_under.png';
import './contact-us.scss';
import ButtonComponent from '../../app-components/button/button.components';
import { useIntl } from 'react-intl';
import { contactUs_req } from '../../api/contact-us/contact-us';

const ContactUs = () => {

    const [state, setState] = useState({
        email: '',
        subject: '',
        message: " "
    })
    const [success, setSuccess] = useState('')

    const intl = useIntl();
    const ContactUs = async () => {
        let email = state.email
        let subject = state.subject
        let message = state.message
        try {
            const contactUsReq = await contactUs_req(email, subject, message);

            setSuccess(contactUsReq)
        } catch (e) {
            console.log('e', e.response);

        }
    }
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    return (
      <div className="contactus-container">
        <img src={AboutTop} alt="ABOUT_TOP" className="w-50" />
        <div className="container contact-info">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              <h3 className="text-center font-22 contact-title">
                {intl.messages.footer.footer_contact}
              </h3>
              <p className="text-center contact-subtitle  font-16 mt-5">
                {intl.messages.contact_sending}
              </p>
              <div className="contact-block"></div>
              <div className="contact-input">
                <p>{intl.messages.registration.email}</p>
                <input
                  type="text"
                  name="email"
                  placeholder={intl.messages.registration.email}
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-input">
                <p>Վերնագիր</p>
                <input
                  type="text"
                  name="subject"
                  placeholder="Վերնագիր"
                  value={state.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-input">
                <p>{intl.messages.sms}</p>
                <textarea
                  type="text"
                  name="message"
                  placeholder={intl.messages.registration.name}
                  value={state.message}
                  onChange={handleChange}
                />
              </div>
              <ButtonComponent
                text={intl.messages.Desired_product_button}
                _onClick={() => ContactUs()}
              />
            </div>
            <div className="d-flex justify-content-center">
              {success.status === 'Success' ? (
                <span className="font-16 lot-color">Շնորհակալություն Ձեր նամակը ուղարկված է</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="conatact_ImgTwo">
          <img
            src={AboutUnder}
            alt="ABOUT_UNDER"
            className="w-50 contact_under"
          />
        </div>
      </div>
    );
}

export default ContactUs