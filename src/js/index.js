import React from 'react';
import {render} from 'react-dom';
import Main from '../components/main';

import css from '../css/style.css';

const root=document.getElementById('root');
const quotes = [
   {
    id: '1',
    quoteText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non massa vitae risus fermentum ullamcorper.',
    authorName:'Author1'
   },
   {
    id: '2',
    quoteText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...',
    authorName:'Author2'
   }
  ];

render(    
    <Main quotes={quotes} />,root
);
