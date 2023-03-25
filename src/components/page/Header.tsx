import { Container, Nav, Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"
export const Header: React.FC<{}> = () => {
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ userSelect: "none" }}>
          <FontAwesomeIcon icon={faBook} className="nav-brand" />{" "}
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link href="#sign-up">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
