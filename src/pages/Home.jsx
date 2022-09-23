import homeImage from '../images/gd-home.png'
import Countdown from '../components/Countdown';
import { Container } from 'reactstrap';
import { pageContainer600Height, pageContainerMd } from '../styling';

//{/* looks fine for mobile */}
//{/* looks fine for browser */}

function Home() {
    return (
        <div style={(window.innerWidth <= 800)?(pageContainer600Height):(pageContainerMd)}>  
        <Countdown/>
            <Container style={{alignItems: 'center', padding: '10px' }}>
                <img src={homeImage}  alt="logo" width="100%"/>
            </Container>
        </div>
      
    );
}

export default Home;