import homeImage from '../images/gd-home.png'
import Countdown from '../components/Countdown';
import backgroundImage from '../images/background.png'
import { Container } from 'reactstrap';

function Home() {
    return (
        <div style={{height: '2000px', backgroundImage: `url(${backgroundImage})` }}>  
            <Container style={{width:'100%',display: 'flex',alignItems: 'center', padding: '50px' }}>
                <img src={homeImage}  alt="logo" width="100%"/>
            </Container>

            
            <Countdown/>
        </div>
      
    );
}

export default Home;