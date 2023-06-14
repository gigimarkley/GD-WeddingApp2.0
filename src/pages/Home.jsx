import homeImage from '../images/gd-home.png'
import Countdown from '../components/Countdown';
import { Container } from 'reactstrap';
import { mobilePageStyle, pageContainerMd } from '../styling'

function Home() {
    
    return (
        <div style={(window.innerWidth <= 800)?(mobilePageStyle):(pageContainerMd)}>  
        <Countdown/>
            <Container style={{alignItems: 'center' }}>
                <img src={homeImage}  alt="logo" height="600px"/>
            </Container>
        </div>
      
    );
}

export default Home;