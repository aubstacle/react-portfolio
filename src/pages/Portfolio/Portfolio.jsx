import Container from "../../components/Container/Container";
import "../Portfolio/Portfolio.css";
import { Text, Pane, Image, Heading } from "evergreen-ui";
import Gameknight from "../../images/GameKnight_Screenshot.png";
import Cultourist from "../../images/Cultourist.png";

const Portfolio = () => {
  return (
    <Container
      className="flex-fill home-bg"
      containerType="container-fluid mb-5"
    >
      <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="hero"
      >
        <Text color="white" fontSize="64px">
          Portfolio
        </Text>
      </Pane>
      <Pane paddingTop="100px" display="flex" justifyContent="space-evenly">
        <Pane
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="grey"
          height="500px"
          width="600px"
        >
          <Pane position="top">
            <Image
              src={Gameknight}
              width="600px"
              padding="10px"
              display="flex"
              flexDirection="row"
            ></Image>
          </Pane>
          <Heading color="white" size={9}>
            Game Knight
          </Heading>
          <Pane display="flex" textAlign="center">
            <Text color="white" padding="10px">
              Game Knight is a full stack social scheduling application helping
              people come together and play various games of their choosing:
              board games, RPGs, card games, video games, puzzles, you name it!
              Stuck at home and bored? Don’t make it a lame night, make it a
              Game Knight!
            </Text>
          </Pane>
        </Pane>
        <Pane
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="grey"
          height="500px"
          width="600px"
        >
          <Pane position="top">
            <Image
              src={Cultourist}
              width="600px"
              padding="10px"
              display="flex"
              flexDirection="row"
            ></Image>
          </Pane>
          <Heading color="white" size={9}>
            CulTourist
          </Heading>
          <Text color="white" padding="10px">
            CulTourist is the perfect resource to know local customs, slang and
            scams while abroad. Get trusted advice from fellow travelers to
            blend in with the locals at your next destination!
          </Text>
        </Pane>
      </Pane>
    </Container>
  );
};

export default Portfolio;
