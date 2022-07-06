import React, {useState} from "react";
import {StatusChanger} from "./StatusChanger";

export function App2() {
  const [status, setStatus] = useState("Verfügbar")
  const onStatusChange = (newStatus) => setStatus(newStatus)

  return (
    <div>
      <h1>Status: {status}</h1>
      <StatusChanger onStatusChange={onStatusChange} statusText="Verfügbar" />
      <StatusChanger onStatusChange={onStatusChange} statusText="Beschäftigt" />
      <StatusChanger onStatusChange={onStatusChange} statusText="Offline" />
    </div>
  )
}
