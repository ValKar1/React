import React from "react";
import {useState} from "react";

export function App4() {

  const [food, setFood] = useState("pasta");
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

  const toggleDate = (event) => {
    setShowDate(!showDate)
  }

  const foodChanged = (event) => {
    setFood(event.target.value)
  }

  const formSubmitted = (submitEvent) => {
    submitEvent.preventDefault();
    let formData = {
      fullname,
      food
    };

    if (showDate) {
      formData.bithdate = birthdate;
    }
    setFormData(formData);
  }

  return(
    <>
      <header>
        <h1>Solution</h1>
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
                required
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
                  required
                />
              </p>
            )}

            <input
              type="checkbox"
              id="checkme"
              checked={showDate}
              onChange={() => setShowDate(!showDate)}
            />
            <label htmlFor="checkme">
              Geburtstag an
            </label>

            <p>
              <label htmlFor="mySelect">
                Country:
              </label>
              <br />
              <select
                name="country"
                id="mySelect"
                value={food}
                onChange={foodChanged}
              >
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
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
