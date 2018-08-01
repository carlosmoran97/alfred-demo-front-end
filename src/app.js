import 'normalize.css/normalize.css';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import AlfredDemo from './components/AlfredDemo';


ReactDOM.render(<AlfredDemo />, document.getElementById("app"));