import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>meow meow</div>
}

export default App;

