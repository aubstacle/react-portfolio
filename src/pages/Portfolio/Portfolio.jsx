import Container from "../../components/Container/Container";
import "../Home/Home.css";
import Jumbotron from "react-bootstrap/Jumbotron";

const Portfolio = () => {
  return (
    <Container
      className="flex-fill home-bg"
      containerType="container-fluid mb-5"
    >
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Portfolio;
