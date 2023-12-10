import React from 'react';
import ReactDOM from 'react-dom/client';

import Launcher from './Launcher';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Launcher is a part of browserRouter
root.render(<BrowserRouter>
                <Launcher/>
            </BrowserRouter>);

// root.render(<Launcher/>);

