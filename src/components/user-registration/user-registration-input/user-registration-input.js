import React from "react";
import "./user-registration-input.scss";

const UserRegistrationInput = () => {
  return (
    <div className="registration-block">
      <div className="registration-input">
        <input
          type="text"
          name="name"
          placeholder={intl.messages.registration.name}
          value={state.name}
          onChange={handleChange}
        />
        <span className="text-danger mt-1">
          {!submitted && error ? error.data.errors.name : null}
        </span>
      </div>
      <div className="registration-input">
        <input
          type="text"
          name="surname"
          placeholder={intl.messages.registration.sure_name}
          value={state.surname}
          onChange={handleChange}
        />
        <span className="text-danger mt-1">
          {!submitted && error ? error.data.errors.surname : null}
        </span>
      </div>
      <div className="registration-input">
        <input
          type="email"
          name="email"
          placeholder={intl.messages.registration.email}
          value={state.email}
          onChange={handleChange}
        />
        <span className="text-danger mt-1">
          {!submitted && error ? error.data.errors.email : null}
        </span>
      </div>
      <div className="registration-input">
        <input
          type="number"
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
        <span className="text-danger mt-1">
          {!submitted && error ? error.data.errors.phone : null}
        </span>
      </div>
      <div className="registration-input">
        <input
          type="text"
          name="login"
          placeholder={intl.messages.registration.last_login}
          value={state.login}
          onChange={handleChange}
        />
        <span className="text-danger mt-1">
          {!submitted && error ? error.data.errors.login : null}
        </span>
      </div>
      <div className="registration-input">
        <input
          type="password"
          name="password"
          placeholder={intl.messages.registration.password}
          value={state.password}
          onChange={handleChange}
        />
        <span className="text-danger mt-1">
          {!submitted && error ? error.data.errors.password : null}
        </span>
      </div>
      <div className="registration-input">
        <input
          type="password"
          name="password_confirmation"
          placeholder={intl.messages.registration.confirme_password}
          value={state.password_confirmation}
          onChange={handleChange}
        />
        <span className="text-danger mt-1">
          {!submitted && error ? error.data.errors.password_confirmation : null}
        </span>
      </div>
      <div className="register-user-check registration-input">
        <input
          type="checkbox"
          name="checkbox"
          onChange={() => setChecked(!checked)}
          className="input-checkbox"
        />
        {checked ? (
          <div className="input-checked">
            <img
              src={require("../../assets/images/icon/conttract.png")}
              alt="CONTTRACT"
            />
          </div>
        ) : (
            ""
          )}
        {console.log("checje", checked)}
        <span className="text-danger mt-1">
          {!submitted && error ? error.data.errors.password_confirmation : null}
        </span>
        <Link to={"/about_us"}>
          <p className="">{intl.messages.registration.assess_low}</p>
        </Link>
      </div>
      {submitted && (
        <div className="successMail">
          {intl.messages.registration.success_low}
        </div>
      )}
      <div className="registration-input">
        <button
          className="btn py-2 text-white font-weight-bold btn-block AuthBtn"
          onClick={onClick}
        >
          {submitted ? (
            <Link to="/verifyEmail" className="user-register">
              {intl.messages.registration.registration_title}
            </Link>
          ) : (
              <span className="user-register">
                {intl.messages.registration.registration_title}
              </span>
            )}
        </button>
      </div>
    </div>
  );
};

export default UserRegistrationInput;
