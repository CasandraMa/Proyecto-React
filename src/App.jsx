import { useState, useEffect } from 'react';
import {Misrutas} from './rutas/routes'
function App() {
  useEffect(() => {
    document.body.style.backgroundColor= "#a00e0e" ;
  }, []);
  return (
    <div>
      <Misrutas/>
    </div>
  )
}

export default App
