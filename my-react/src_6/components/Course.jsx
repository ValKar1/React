import propTypes from "prop-types";

export function Course(props) {
  return (
    <p>
      <strong>{props.title}</strong>
      <br />
      <mark>{props.author}</mark>
    </p>
  )
}

Course.propTypes = { // Need to install: (npm i prop-types)
  title: propTypes.string, // Validation
}

Course.defaultProps = { // Default props
  title: 'Bitte "title" angeben',
  author: 'Bitte "author" angeben'
}

Course.displayName = 'LinkedInCours' // Set component name
