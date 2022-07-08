import React, {useState} from "react";
import { Linkchecker } from "./Linkchecker"

export function App3() {
  return (
    <div>
      <Linkchecker />
      <ul>
        <li>
          <a href="https://de.linkedin.com/">LinkedIn</a>
        </li>
        <li>
          <a href="https://blog.activenode.de/">David's Blog</a>
        </li>
        <li>
          <a href="https://unsichere-link">Bank Webseite</a>
        </li>
      </ul>
    </div>
  )
}
