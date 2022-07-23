import React from "react";
import {useState, useRef} from "react";

export function App2() {

  const [formData, setFormData] = useState({});
  const [showDate, setShowDate] = useState(true);

  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const fullnameChanged = (event) => {
    setFullname(event.target.value);
  }

  const birthdateChanged = (event) => {
    setBirthdate(event.target.value);
  }

  const formSubmitted = (submitEvent) => {
    submitEvent.preventDefault();
    setFormData({fullname, birthdate})
  }

  return(
    <>
      <header>
        <h1>Controlled Forms ✓</h1>
      </header>

      <main>
        <form onSubmit={formSubmitted}>
          <fieldset>
            <legend>Persönliche Daten</legend>

            <p>
              <label htmlFor="fullname">Name:</label>
              <br />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Ihr Name"
                value={fullname}
                onInput={fullnameChanged}
              />
            </p>

            {showDate && (
              <p>
                <label htmlFor="birthdate">
                  Geburtstag:
                </label>
                <br />
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={birthdate}
                  onInput={birthdateChanged}
                />
              </p>
            )}

            <button
              type="button"
              onClick={() => setShowDate(!showDate)}
            >
              Geburtstag an/aus
            </button>

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
