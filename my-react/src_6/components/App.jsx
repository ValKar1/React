import React from 'react';
import {Course} from "./Course";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headline}</h1>
        <Course title="Nebenprojekt als Softwareentwickler:in nutzen" author="Kai Klostermann" />
        <Course title="React Hooks Grundkurs" author="David Lorens" />
        <Course title={1} author ="Happy cat" />
      </div>
    )
  }
}
App.defaultProps = {  // Default props
  headline: "Meine coolen Kurse"
}
App.displayName = 'Courses' // Set component name
