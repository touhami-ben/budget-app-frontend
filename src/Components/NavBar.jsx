import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/transactions">Budget App</Navbar.Brand>
            <Button variant="primary" href="/transactions/new">New Transaction</Button>{' '}
            
          </Container>
        </Navbar>
    );
};