import { Carousel } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export function Imagenes(props) {
    return (
            <div className="carrusel">
                <div className="col carrusel-container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require(`../assets/images/${props.imagen}.png`)}
                                alt="Primero"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            );
}