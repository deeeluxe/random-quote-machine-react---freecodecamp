import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "", 
      quote: ""
    };

  }
  render() {
    return (
      <div className="App">
      <h2>Random Quote Machine React Test</h2>
      <Card style={{ width: '90%', maxWidth: "50rem" }}>
        <Card.Body id="quote-box">
          <blockquote>
            <Card.Title id="text">uhefhehf</Card.Title>
          </blockquote>
          <Card.Text id="author">linus</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button id="new-quote" variant="primary">New Quote</Button>
          <Button id="tweet-quote" variant="primary">Tweet Quote</Button>
        </Card.Footer>
      </Card> 
      </div>
    );
  }
}

export default App;


// async function updateQuote() {
//   // Fetch a random quote from the Quotable API
//   const response = await fetch("https://api.quotable.io/random");
//   const data = await response.json();
//   if (response.ok) {
//     // Update DOM elements
//     quote.textContent = data.content;
//     cite.textContent = data.author;
//   } else {
//     quote.textContent = "An error occured";
//     console.log(data);
//   }
// }