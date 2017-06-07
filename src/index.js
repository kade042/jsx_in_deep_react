import React from 'react';
import { render }from 'react-dom';
import App from './App';

var data = [
    {
     'when': '2 minutes ago',
     'who': 'Jill Dupre',
     'description': 'Created new account',
    },
    {
     'when': '1 hours ago',
     'who': 'Lose White',
     'description': 'Added fist chapter',
    },
    {
     'when': '2 hours ago',
     'who': 'Jordan Whash',
     'description': 'Created new account',
   },
 ];

var headings = ['Last updated on', 'By Author', 'Summary'];
var title = 'Recent changes';


const rootEl = document.getElementById('root');

render (
    <App title={title} />,
    rootEl
  );
