import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Quotable extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.getNewQuote();
  }
  getNewQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (!response.ok) throw new Error(data);
      this.setState({ data });
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      this.setState({ data: { content: "Opps... Something went wrong" } });
    }
  };

  render() {
    const { data } = this.state;
    if (!data) return null;
    return (
      <div className="App">
        <Card style={{ width: "90%", maxWidth: "40rem" }}>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{data.content}</p>
              {data.author && (
                <footer className="blockquote-footer">
                  <cite title="Source Title">{data.author}</cite>
                </footer>
              )}
            </blockquote>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={this.getNewQuote}>
              New Quote
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}