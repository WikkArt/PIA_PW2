import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';
import Registro from './registro';

function App() {

    return (
        <Routes> {/* Aquí solo manejamos las rutas */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
        </Routes>
    );

}

export default App;