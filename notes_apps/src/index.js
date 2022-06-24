import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import Header from './components/Header';
import NotesApp from './components/NotesApp';
/* eslint-disable import/no-unresolved */


const root = createRoot(document.querySelector('#root'));
const header = createRoot(document.querySelector('#header'));
header.render(<Header />);
root.render(<NotesApp />);
