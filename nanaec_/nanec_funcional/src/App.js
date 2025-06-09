import { BrowserRouter, Routes, Route } from 'react-router-dom';// Envuelve toda la app y activa el sistema de rutas en el navegador. 
// Routes define las rutas de la aplicación y Route define cada ruta individualmente.
// Cada ruta tiene un path (la URL) y un elemento que se renderiza cuando se accede a esa ruta.
import './App.css'; // Importa el archivo CSS para aplicar estilos a la aplicación.
import ListaRestaurantes from "./Componentes/ListaRestaurantes";
import CrearRestaurante from "./Componentes/CrearRestaurante";
import Inicio from './Componentes/Inicio';
import React, { useState } from 'react';

function App() {
  // Mueve el estado aquí
   const [restaurantes, setRestaurantes] = useState([
      {
        nombre: "El Redil",
        direccion: "Shyris y Matamoros",
        tipo: "Tradicional",
        reputacion: 1,
        UrlImagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGTV9ptpoJ1nv8SE8QJ_A4-pCjnd46axWiA&s",
      },
      {
        nombre: "Cafeteria",
        direccion: "Julio Cesar Villacres y N68F",
        tipo: "Cafeteria",
        reputacion: 2,
        UrlImagen:
          "https://th.bing.com/th/id/OIP.HXhKQnE0QlerZWTn5b27_gHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7",
      },
      {
        nombre: "Restaurante los Pedrosa",
        direccion: "Presa y Zamora",
        tipo: "Comida Rápida",
        reputacion: 5,
        UrlImagen:
          "https://th.bing.com/th/id/OIP.Lq4y_ACmvY-av-0cmcxQeQHaE7?w=287&h=191&c=7&r=0&o=5&pid=1.7",
      },
    ]);
  const [state, setState] = useState({
    nombre: "",
    direccion: "",
    tipo: "",
    reputacion: "",
    UrlImagen: "",
  });
  const agregarRestaurante = (nuevoRestaurante) => {
      setRestaurantes((prev) => [...prev, nuevoRestaurante]);//agrega un nuevo restaurante al estado de restaurantes
    };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path='/crear' element={
            <CrearRestaurante
            state={state}
            setState={setState}
            agregarRestaurante={agregarRestaurante}
            />
              } 
              />
          <Route
            path="/lista"
            element={
              <ListaRestaurantes
                restaurantes={restaurantes}

              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

