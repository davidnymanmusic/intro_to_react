import React, {Component} from 'react';
import './App.css';


const Div2 = ({question, description}) =>
<div class="container">
<h2>{question}</h2>
<p>{description}</p>
<p>According to <a href="https://stackshare.io/react/in-stacks">stackshare.io</a>: </p>
<ul>
  <li> <a href="http://www.facebook.com/"> Facebook</a></li>
  <li> <a href="http://www.instagram.com/"> Instagram</a></li>
  <li> <a href="http://www.twitter.com/"> Twitter</a></li>
  <li> <a href="http://www.pinterest.com/">Pinterest</a> </li>
  <li> <a href="http://www.airbnb.com/"> Airbnb</a></li>
  <li> <a href="http://www.codecademy.com/"> Codecademy</a></li>
  <li> <a href="http://www.uber.com/"> Uber</a></li>
  <li> <a href="http://www.lyft.com/"> Lyft</a></li>
  <li> <a href="http://www.netflix.com/"> Netflix</a></li>
  <li> <a href="http://www.reddit.com/"> Reddit</a></li>
  <li> <a href="http://www.okcupid.com/"> OkCupid</a></li>
</ul>
</div>


export default Div2;
