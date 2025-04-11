import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';
import Registro from './registro';
import PerfilAdmin from './perfilAdmin'
import PerfilUsuario from './perfilUsuario';
import EditarPerfil from './editarPerfil';
import CrearPost from "./crearPost";
import EditarPost from "./editarPost"

function App() {

    return (
        <Routes> {/* Aquí solo manejamos las rutas */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfilAdmin" element={<PerfilAdmin />} />
            <Route path="/perfilUsuario" element={<PerfilUsuario />} />
            <Route path="/editarPerfil" element={<EditarPerfil />} />
            <Route path="/crearPost" element={<CrearPost />} />
            <Route path="/editarPost" element={<EditarPost />} />
        </Routes>
    );

}

export default App;