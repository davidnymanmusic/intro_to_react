import React, {Component} from 'react';
import './App.css';


const Div = ({question, description}) =>
<div class="container">
<h2>{question}</h2>
<p>{description}</p>
</div>


export default Div;
