import React from "react";
import { Navbar } from "../componentes/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import Img1 from "../assets/images/cliente1.jpg";
import Img2 from "../assets/images/cliente2.jpg";
import Img3 from "../assets/images/cliente3.jpg";
import "../App.css";

export function About() {
    return (
        <div>
            <Navbar />
            <div className="container mt-12">
                <h2 className="text-center mb-5">Acerca de Nosotros</h2>
                <div className="row">
                    <div className="col-lg-12 mx-auto">

                        <p>
                            En nuestro sitio web, ofrecemos un convertidor de MP3 de YouTube
                            que te permite convertir tus videos favoritos de YouTube a
                            archivos de audio MP3 de alta calidad. Ya sea que desees escuchar
                            música mientras viajas, disfrutar de tus podcasts favoritos o
                            simplemente guardar tus canciones preferidas en tu dispositivo,
                            nuestro convertidor es la herramienta perfecta para ti.
                        </p>
                        <p>
                            Nuestro equipo está comprometido en proporcionarte la mejor
                            experiencia de usuario posible. Valoramos tu privacidad y
                            seguridad, por lo que aseguramos que todos tus datos personales
                            estén protegidos y que la conversión de tus videos se realice de
                            manera rápida y eficiente.
                        </p>
                        <h3>¡Y qué mejor para contártelo que nuestros usuarios!</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-10 mx-auto">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={Img1} alt="Cliente 1" />
                                <Carousel.Caption>
                                    <h3 style={{ color: "black" }}>Usuario satisfecho</h3>
                                    <p style={{ color: "black" }}>
                                        "¡Fantástico servicio! Convertí mis videos de YouTube a MP3 en
                                        segundos. ¡Altamente recomendado!"
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={Img2} alt="Cliente 2" />
                                <Carousel.Caption>
                                    <h3 style={{ color: "black" }}>Amante de la música</h3>
                                    <p style={{ color: "black" }}>
                                        "Increíblemente fácil de usar y con una calidad de audio
                                        excepcional. ¡Gracias por esta increíble herramienta!"
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={Img3} alt="Cliente 3" />
                                <Carousel.Caption>
                                    <h3 style={{ color: "black" }}>Cliente fiel</h3>
                                    <p style={{ color: "black" }}>
                                        "Utilizo este convertidor de MP3 de YouTube regularmente y siempre
                                        me sorprende lo rápido y confiable que es. ¡Lo recomiendo a todos
                                        mis amigos!"
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            <p style={{ color: "#a00e0e" }}>
                En nuestro sitio web, ofrecemos un convertidor de MP3 de YouTube
                que te permite convertir tus videos favoritos de YouTube a
                archivos de audio MP3 de alta calidad. Ya sea que desees escuchar
                música mientras viajas, disfrutar de tus podcasts favoritos o
                simplemente guardar tus canciones preferidas en tu dispositivo,
                nuestro convertidor es la herramienta perfecta para ti.
            </p>
        </div>
    );
}
