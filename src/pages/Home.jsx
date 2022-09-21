import homeImage from '../images/gd-home.png'
import Countdown from '../components/Countdown';
import backgroundImage from '../images/background.png'
import {homeNames, homeDetails} from '../styling'
import { Container } from 'reactstrap';

function Home() {
    return (
        <div style={{height: '2000px', backgroundImage: `url(${backgroundImage})` }}>  
            <Container style={{width:'100%',display: 'flex',alignItems: 'center', textAlign: 'center'}}>
                <h1 style={homeNames}>Gillian Markley  </h1>
                <h1 style={homeNames}>  Daniel Kerr</h1>
            </Container>
            
            <Container style={{ alignItems: 'center'}}>
                <img src={homeImage}  alt="logo" width="100%"/>
            </Container>

            <Container style={{ marginTop: '20px', alignItems: 'center'}}>
                <h4 style={homeDetails}>October 7th, 2023</h4>
                <h4 style={homeDetails}>Claremont, CA</h4>
            </Container>
            
            <Countdown/>
        </div>
      
    );
}

export default Home;