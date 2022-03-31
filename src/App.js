import Banner from "./components/Banner";
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";

function App() {
  // let [products, setProducts] = useState();
  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">YESS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg "
              alt="img"
              width="100%"
            />
            <h3>상품명1</h3>
            <p>상품설명&가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="img"
              width="100%"
            />
            <h3>상품명2</h3>
            <p>상품설명&가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="img"
              width="100%"
            />
            <h3>상품명3</h3>
            <p>상품설명&가격</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
