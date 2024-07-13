// // src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import{ Auth } from './pages/auth/index';
import { HomePage }from './pages/home-page/index';
import { AddProject } from './pages/add-Project/index';
import { UserProfile } from './pages/update-Participent/index';
import { EditProject } from './pages/update-Project/index';
import { Participent } from './pages/participent/index';
import { HomePageEntery } from './pages/home-page-Entery/index';
import { Notifications } from './pages/notification/index';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<Auth />} />
                <Route path="/homePage" element={<HomePageEntery />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/addProject" element={<AddProject />} />
                <Route path="/UserProfile" element={<UserProfile />} />
                <Route path="/editProject/:id" element={<EditProject />} /> 
                <Route path="/participant" element={<Participent />} /> 
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/" element={<HomePageEntery />} />
            </Routes>
        </Router>
    );
}

export default App;
