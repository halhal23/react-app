import React from 'react';
import PropTypes from 'prop-types';
function App() {
  const profiles = [
    { name: "fujia", age: 43 },
    { name: "hiroharu", age: 23 },
    { name: "", age: 43 }
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>Hello my name is { props.name }. I am { props.age } years old.</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired
}

export default App;

