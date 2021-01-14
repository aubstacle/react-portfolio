import Container from "../../components/Container/Container";
import "../Portfolio/Portfolio.css";
import Jumbotron from "react-bootstrap/Jumbotron";

const Portfolio = () => {
  return (
    <Container
      className="flex-fill home-bg"
      containerType="container-fluid mb-5"
    >
        <Jumbotron className="hero">
          <Container>
            <h1 className="text-center text-white">Portfolio</h1>
          </Container>
        </Jumbotron>
    </Container>
  );
};

export default Portfolio;
