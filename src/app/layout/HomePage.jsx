import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />
          Re-Vents
        </Header>
        <Link to='/events'>
          <Button size='huge' inverted>
            Get Started
            <Icon name='right arrow' inverted />
          </Button>
        </Link>
      </Container>
    </Segment>
  );
};

export default HomePage;
