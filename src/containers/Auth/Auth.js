import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import { auth, setAuthRedirectPath } from "../../store/actions";
import { checkValidity } from "../../shared/utility";
import "./Auth.css";

function Auth() {
  const dispatch = useDispatch();
  const { building } = useSelector(state => state.burger);
  const { loading, error, token, authRedirectPath } = useSelector(
    state => state.auth
  );
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "E-Mail"
      },
      value: "",
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password"
      },
      value: "",
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false
    }
  });

  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    if (!building && authRedirectPath !== "/") {
      dispatch(setAuthRedirectPath());
    }
  }, [dispatch, building, authRedirectPath]);

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedControls = {
      ...authForm,
      [inputIdentifier]: {
        ...authForm[inputIdentifier],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[inputIdentifier].validation
        ),
        touched: true
      }
    };
    setAuthForm(updatedControls);
  };

  const submitHandler = event => {
    event.preventDefault();
    dispatch(auth(authForm.email.value, authForm.password.value, isSignup));
  };

  const switchAuthMode = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key]
    });
  }

  let authRedirect = null;
  if (token) {
    authRedirect = <Redirect to={authRedirectPath} />;
  }

  return (
    <div className="Auth">
      {authRedirect}
      <h4>{!isSignup ? "SIGNIN" : "SIGNUP"}</h4>
      {error ? <p>{error.message}</p> : null}
      <form onSubmit={submitHandler}>
        {loading ? (
          <Spinner />
        ) : (
          formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={event => inputChangedHandler(event, formElement.id)}
            />
          ))
        )}
        <Button btnType="Success">SUBMIT</Button>
      </form>
      <Button btnType="Danger" clicked={switchAuthMode}>
        SWITCH TO {isSignup ? "SIGNIN" : "SIGNUP"}
      </Button>
    </div>
  );
}

export default Auth;
