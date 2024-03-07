import { useState, useEffect } from 'react';
import { fetch } from '../services/Apirequest';
import {Navbar} from '../componentes/navbar';
import Logo from '../assets/images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';




export function Inicio() {
    const [link, setLink] = useState('');
    const [id, setId] = useState(null);
    const [response, setResponse] = useState(null);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchData = () => {
                let interval = setInterval(async function () {
                    setDisabled(true);
                    const res = await fetch(id);

                    if (res.status === 200 && res.data.status === "ok") {
                        setDisabled(false);
                        setResponse(res.data);
                        clearInterval(interval);
                    } else if (res.status === 200 && res.data.status === "fail") {
                        alert("La ID del video es incorrecta");
                        setDisabled(false);
                        clearInterval(interval);
                    }

                }, 1000);
            }

            fetchData();
        }
    }, [id]);

    useEffect(() => {
        if (response) {
            window.location.href = response.link;
        }
    }, [response]);


    return (
        <div>
            <Navbar/>
            <div className="App">

                <div id="logo">
                    <h2>CONVERTIDOR MP3</h2>
                    <img src={Logo} />
                </div>

                <div id="cuerpo">
                    <input type="text"
                        placeholder="Escribe tu link"
                        value={link}
                        onChange={(e) => {
                            setLink(e.target.value);
                        }}
                    />
                    <span>Inserta la URL de Youtube que quieras convertir a MP3</span>
                </div>
                <button style={{ marginLeft: '30%', marginTop: '5%'  }}
                    onClick={() => {
                        const startIndex = link.indexOf("v=") + 2;
                        if (startIndex !== -1) {
                            const endIndex = link.indexOf("&", startIndex);
                            const videoId = endIndex !== -1 ? link.substring(startIndex, endIndex) : link.substring(startIndex);
                            setId(videoId);
                        }
                    }}
                    disabled={disabled}
                    className={disabled ? "btn-disabled" : ""}
                >
                    Descargar
                </button>
            </div>
        </div>
    )
}