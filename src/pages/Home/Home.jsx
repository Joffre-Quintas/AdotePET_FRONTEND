import './Home.scss';

import bannerAdopt from '../../assets/img/bannersHome/bannerAdopt.jpg';
import bannerRegister from '../../assets/img/bannersHome/bannerRegister.jpg';
import imgTest from '../../assets/img/test/imgTeste.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="container">
            <div className='container_bannerAdopt'>          
                <p>Adote um PET e descubra o amor incondicional que só ele pode oferecer.</p>
                <img src={bannerAdopt} alt="Banner to Adopt" />
            </div>
            <div className='container_showAnimals'>
                <h2>Amiguinhos disponíveis para adoção</h2>
                <p>Já se encantou por algum? Clique no card para mais informações.</p>
                <div className='container_showAnimals_carousel'>
                    <img src={imgTest} />
                    <img src={imgTest} />
                    <img src={imgTest} />
                    <img src={imgTest} />
                    <img src={imgTest} />
                    <img src={imgTest} />
                    <img src={imgTest} />
                    <img src={imgTest} />
                    <img src={imgTest} />
                    <img src={imgTest} />
                </div>
            </div>
            <Link to='/register-pet'><div className='container_bannerRegisterAnimal'>       
                <p>ONG's , possui um animalzinho pronto para a adoção?</p>        
                <p>Registre-o Aqui!</p>
                <img src={bannerRegister} alt=" Banner Register Animal" />
            </div></Link>
        </div>
    )
}

export default Home;