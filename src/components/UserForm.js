import { useState } from "react";
import { createUser, loginUser } from "../services/user-service";
import { useHistory } from "react-router-dom";
import GoogleButton from "./GoogleButton";

export default function UserForm({ isLogin }) {
  const [formState, setFormState] = useState(newForm());
  const history = useHistory();

  function newForm() {
    return {
      email: "",
      password: "",
      passwordConf: "",
      firstName: "",
      lastName: "",
      image: null,
      errors: ""
    };
  }

  function matchingPassword() {
    if (isLogin) return true;
    return password === passwordConf;
  }

  function formValid() {
    const { email, password } = formState;
    return !!email && !!password;
  }

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      errors: ""
    }));
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (!formValid()) return;
    try {
      const { email, password } = formState;

      await loginUser(email, password);

      setFormState(newForm());

      history.push("/");
    } catch ({ message }) {
      setFormState({ ...newForm(), errors: message });
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!formValid()) return;
    try {
      const userCreated = await createUser(formState);
      if (!userCreated) {
        setFormState({
          ...newForm(),
          errors: "An Error Occurred Creating Account"
        });
      } else {
        setFormState(newForm());
        history.push("/");
      }
    } catch ({ message }) {
      setFormState({ ...newForm(), errors: message });
    }
  }

  function handleImageFile(e) {
    const file = e.target.files[0];
    setFormState((prevState) => ({ ...prevState, image: file }));
  }

  const { firstName, lastName, email, password, passwordConf } = formState;

  return (
    <form onSubmit={isLogin ? handleLogin : handleSignup}>
      <legend>
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        {formState.errors && <p>{formState.errors}</p>}
        {!isLogin && (
          <>
            <label>
              First Name
              <input
                type="text"
                value={firstName}
                onChange={handleChange}
                name="firstName"
                placeholder="Johnny"
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                value={lastName}
                onChange={handleChange}
                name="lastName"
                placeholder="Appleseed"
              />
            </label>
            <label>
              Profile Image
              <input type="file" onChange={handleImageFile} name="image" />
            </label>
          </>
        )}
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
            placeholder="johnny.appleseed@me.."
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
            placeholder="p@$$w0rd"
          />
        </label>
        {!isLogin && (
          <label>
            Password Confirmation
            <input
              type="password"
              value={passwordConf}
              onChange={handleChange}
              name="passwordConf"
              placeholder="p@$$w0rd"
            />
          </label>
        )}
        <input
          disabled={!matchingPassword()}
          type="submit"
          value={isLogin ? "Login" : "Signup"}
        />
        <br />
        <br />
        <GoogleButton />
      </legend>
    </form>
  );
}