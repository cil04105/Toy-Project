import "../Banner.css";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <Button variant="primary">Primary</Button>{" "}
      </div>
    </>
  );
}

export default Banner;
