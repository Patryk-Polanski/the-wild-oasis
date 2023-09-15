import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Heading from './ui/Heading';
import Button from './ui/Button';
import Input from './ui/Input';
import Row from './ui/Row';

const StyledApp = styled.main`
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading as='h1'>The Wild Oasis</Heading>
            <div>
              <Heading as='h2'>Check in and out</Heading>
              <Button onClick={() => alert('check in')}>Check in</Button>
              <Button
                variation='secondary'
                size='small'
                onClick={() => alert('check out')}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type='number' placeholder='Number of guests'></Input>
              <Input type='number' placeholder='Number of guests'></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
