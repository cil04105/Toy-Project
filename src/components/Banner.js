import "../Banner.css";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="bannerContainer">
      <div className="banner">
        <h1>30% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <Button variant="primary">Primary</Button>{" "}
      </div>
    </div>
  );
}

export default Banner;
