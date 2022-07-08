import React, {useState} from "react";
import {BusinessProfile} from "./BusinessProfile";
import {OpenToWorkContext} from "./OpenToWorkContext";

export function App1() {
  return (
    <div>
      <div>
        <h1>Contexts &amp; Theming</h1>
        <BusinessProfile
          name="David Lorenz"
          job="Frontend Architect"
        />
      </div>

      <OpenToWorkContext.Provider value={true}>
        <div>
          <h2>Open to work:</h2>

          <BusinessProfile
            name="Maus"
            job="Käse essen"
          />

          <BusinessProfile
            name="Pflanze"
            job="Luft aufbereiten"
          />
        </div>
      </OpenToWorkContext.Provider>
    </div>
  )
}
