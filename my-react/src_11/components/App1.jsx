import React from "react";
import {useState, useRef} from "react";

export function App1() {

  const [formData, setFormData] = useState({});
  const textFieldRef = useRef();

  const formSubmitted = (submitEvent) => {
    submitEvent.preventDefault();
    const form = submitEvent.target;
    const formControls = form.elements;

    // const fullnameInput = formControls.fullname; // Über event
    const fullnameInput = textFieldRef.current;     // Über ref
    const birthdateInput = formControls.birthdate;

    const fullname = fullnameInput.value;
    const birthdate = birthdateInput.value;

    setFormData({fullname, birthdate})
  }

  return(
    <>
      <header>
        <h1>Uncontrolled Forms</h1>
      </header>

      <main>
        <form onSubmit={formSubmitted}>
          <fieldset>
            <legend>Persönliche Daten</legend>

            <p>
              <label htmlFor="fullname">Name:</label>
              <br />
              <input
                ref={textFieldRef}
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Ihr Name"
                />
            </p>

            <p>
              <label htmlFor="birthdate">
                Geburtstag:
              </label>
              <br />
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                />
            </p>

            <p>
              <button type="submit">
                Formular absenden
              </button>
            </p>
          </fieldset>
        </form>

        <h2>Abgesendete Daten:</h2>
        {JSON.stringify(formData)}
      </main>
    </>
  )
}
