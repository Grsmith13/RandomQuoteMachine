import { useEffect, useState } from "react";
import { Card, CardBody, Button } from "react-bootstrap";
import { quotes } from "../data";
import { changeBackgroundColor } from "./RandomColorPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
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
    <div className="container quote-box-container ">
      <div className="card mx-auto border " id="quote-box">
        <Card.Body>
          <Card.Text id="text">"{quote.text}"</Card.Text>
        </Card.Body>
        <CardBody id="author">-{quote.name}</CardBody>
        <div className="custom-buttons">
          <Button
            id="TikTok-quote"
            className="left-button"
            href="#https://tiktok.com"
          >
            <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
          </Button>
          <Button id="tweet-quote" className="left-button" href={twitterLink}>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </Button>
          <Button id="new-quote" className="right-button" onClick={handleClick}>
            <FontAwesomeIcon icon={faPenNib} />
          </Button>
        </div>
      </div>
      <div className="axis main-axis"></div>
      <div className="axis cross-axis"></div>
    </div>
  );
};
export default QuoteBox;
