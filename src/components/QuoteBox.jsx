import { useEffect, useState } from "react";
import { Card, CardBody, Button } from "react-bootstrap";
import { quotes } from "../data";
import { changeBackgroundColor } from "./RandomColorPage";
import "./QuoteBox.css";
const QuoteBox = () => {
  const [quote, setQuote] = useState(quotes);

  const ranNum = () => {
    return Math.round(Math.random() * (quotes.length - 1));
  };

  const handleClick = () => {
    changeBackgroundColor(); //changes the background color on the page to a random color
    let random = ranNum();
    setQuote(quotes[random]);
  };

  //sets quote to initially so that the page already has a quote on it while setting the webpage to a random color.
  useEffect(() => {
    const initialRandomIndex = Math.floor(Math.random() * quotes.length);
    changeBackgroundColor();
    setQuote(quotes[initialRandomIndex]);
  }, []);
  const encodedText = encodeURIComponent('"' + quote.text + '" ' + quote.name);
  const twitterLink =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
    encodedText;
  return (
    <div className="quote-box-container">
      <Card id="quote-box">
        <Card.Body>
          <Card.Text id="text">"{quote.text}"</Card.Text>
        </Card.Body>
        <CardBody id="author">-{quote.name}</CardBody>
        <div className="custom-buttons">
          <Button id="tumblr-quote" className="left-button" href="#">
            Link
          </Button>
          <Button id="tweet-quote" className="left-button" href={twitterLink}>
            Link
          </Button>
          <Button id="new-quote" className="right-button" onClick={handleClick}>
            new quote
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default QuoteBox;
