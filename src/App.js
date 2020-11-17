import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  
  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if(!response.ok) throw new Error(data);
      this.setState({ data })
    } catch (error) {
      console.log(error);
      this.setState({
        data: {content: "Opps, something went wrong, Linus"}
      })
    }
  }
   
    
  render() {
    const {data} = this.state;
    if(!data) return null
    return (
      <div className="App">
      <h2>Random Quote Machine/React</h2>
      <Card style={{ width: '90%', maxWidth: "50rem" }}>
        <Card.Body id="quote-box">
          <blockquote>
          <Card.Title id="text">{data.content}</Card.Title>
          </blockquote>
          <Card.Text id="author">{data.author}</Card.Text>
          <Button id="new-quote" variant="primary" onClick={this.getNewQuote}>New Quote</Button>
          <Button id="tweet-quote" variant="primary">Tweet Quote</Button>
        </Card.Body>

      </Card> 
      </div>
    );
  }
}

export default App;