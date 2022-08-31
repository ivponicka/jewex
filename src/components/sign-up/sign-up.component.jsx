import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Button from "../button/button.component";

const defaultFormFileds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Authentication = () => {
  const [formFields, setFormFileds] = useState(defaultFormFileds);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFileds = () => {
    setFormFileds(defaultFormFileds);
  };

 const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFileds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email was already used");
      } else {
        alert("an error");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
      
        <FormInput
          label="Display name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        
        <FormInput
          label="Email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        
        <FormInput
          label="Password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
       
        <FormInput
          label="Password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default Authentication;


