import homeImage from '../images/gd-home.png'
import Countdown from '../components/Countdown';
import { Container } from 'reactstrap';
import { pageContainerNoHeight } from '../styling';

function Home() {
    return (
        <div style={pageContainerNoHeight}>  
            <Container style={{width:'100%', alignItems: 'center', padding: '50px' }}>
                <img src={homeImage}  alt="logo" width="100%"/>

                <Countdown/>
            </Container>
            
        </div>
      
    );
}

export default Home;