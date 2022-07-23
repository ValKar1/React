import React from "react";
import {useState} from "react";

export function App3() {

  const [formData, setFormData] = useState({});
  const [showDate, setShowDate] = useState(true);

  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("ru");

  const fullnameChanged = (event) => {
    setFullname(event.target.value);
  }

  const birthdateChanged = (event) => {
    setBirthdate(event.target.value);
  }

  const toggleDate = (event) => {
    setShowDate(!showDate)
  }

  const countryChanged = (event) => {
    setCountry(event.target.value)
  }

  const formSubmitted = (submitEvent) => {
    submitEvent.preventDefault();
    const data = [fullname, country];
    if (showDate) {
      data.push(birthdate)
    }
    setFormData(data)
  }

  return(
    <>
      <header>
        <h1>Challenge</h1>
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
                required={true}
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
                  required={true}
                />
              </p>
            )}

            <label htmlFor="on/off">
              Zeige Geburtstag:
            </label>
            <input
              type="checkbox"
              id="on/off"
              name="on/off"
              checked={showDate}
              onChange={toggleDate}
            />

            <p>
              <label htmlFor="country">
                Country:
              </label>
              <br />
              <select
                name="country"
                id="country"
                value={country}
                onChange={countryChanged}
              >
                <option value="de">Germany</option>
                <option value="ru">Russia</option>
              </select>
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
