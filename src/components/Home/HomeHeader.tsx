
import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

function HomeHeader() {
  return (
    <Container text style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Header
        as='h1'
        content='James W. Cramer'
      />
      <p>
        Hello and welcome to my portfolio! My name is James Cramer, and I'm a software developer based in Missoula, Montana with over 15 years of experience creating high-quality software solutions. I've always had a passion for programming, and over the years, I've honed my skills and stayed up-to-date with the latest technologies and techniques.
      </p>
      <p>
        I take pride in my ability to deliver innovative solutions that meet my clients' needs and exceed their expectations. My expertise spans a variety of areas, including web development, data analytics, and custom software solutions. I'm always on the lookout for new challenges and opportunities to learn and grow as a developer.
      </p>
      <p>
        On this website, you'll find examples of my work and educational experiences, as well as more information about my skills and expertise. If you have any questions or would like to discuss a potential project, please don't hesitate to reach out - I'd love to hear from you!
      </p>
    </Container>
  );
}

export default HomeHeader;
