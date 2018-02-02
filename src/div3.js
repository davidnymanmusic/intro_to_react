import React, {Component} from 'react';
import './App.css';


const Div3 = ({question, description}) =>
<div class="container">
<h2>{question}</h2>
<p>{description}</p>
<p>Usage of JSX makes it easier to template</p>
<p>React Native makes it easier to create mobile apps</p>
<p>Makes use of a Virtual DOM which makes DOM manipulation faster</p>
<p>Allows you to create customizable elements that you can easily reuse</p>
</div>


export default Div3;
