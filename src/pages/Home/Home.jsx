import Container from "../../components/Container/Container";
import "./Home.css";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";

const Home = () => {
  return (
    <Container
      className="flex-fill home-bg"
      containerType="container-fluid mb-5"
    >
      <Jumbotron className="bg-dark text-center">
        <p style={{color: 'white', fontSize:'30px'}}>Welcome!</p>
        <h5 style={{color: 'white'}}>I'm a full-stack developer with previous experience in video, graphic design and all things digital media.</h5>
      </Jumbotron>
    </Container>
  );
};

export default Home;
