import './LandingPage.css';
import { Link } from 'react-router-dom';
import dog from './imagenes/perro.png';
import logoBrand from './imagenes/png-clipart-cute-dog-product-kind-cute-puppies.png';
// import instagram from '../../media/instagram.png';
// import github from '../../media/github.png';
// import linkedin from '../../media/linkedin.png';
// import twitter from '../../media/twitter.png';

export default function LandingPage(){
    return (
        <div className='body'>
            <div className='shape' />
            <div className="info">
                <div>
                    <img className='logo' src={logoBrand} alt="Logo-WikiDogs" />
                </div>
                <div>
                    <h3 className='text1'>Get info about your</h3>
                    <h3 className='text2'>favorite dog breed</h3>
                    <div className='buttonContainer'>
                        <Link className='button' to='/home'>Home</Link>
                    </div>
                </div>
                <div>
                    <p className='desc'>Luis Garcia / <b>PI Dogs</b></p>
                    {/* <div className='socialsContainer'>
                        <a href="https://github.com/kikeai" target="_blank" rel="noreferrer"><img className='socials1' src={github} alt="github" /></a>
                        <a href="https://linkedin.com/in/kikeai" target="_blank" rel="noreferrer"><img className='socials' src={linkedin} alt="linkedin" /></a>
                        <a href="https://instagram.com/kike.ai" target="_blank" rel="noreferrer"><img className='socials' src={instagram} alt="instagram" /></a>
                        <a href="https://twitter.com/KIKEill" target="_blank" rel="noreferrer"><img className='socials' src={twitter} alt="twitter" /></a>
                    </div> */}
                </div>
            </div>

            <div>
                <img className='dog' src={dog} alt="Dog" />
            </div>
        </div>
    )
}