import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';
import Registro from './registro';
import PerfilUsuario from './perfilUsuario';
import CrearPost from "./crearPost";

function App() {

    return (
        <Routes> {/* Aquí solo manejamos las rutas */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfilUsuario" element={<PerfilUsuario />} />
            <Route path="/crearPost" element={<CrearPost />} />
        </Routes>
    );

}

export default App;