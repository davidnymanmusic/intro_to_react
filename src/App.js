import React, { Component } from 'react';

import './App.css';
import Head from './head';
import Div from './div';
import Div2 from './div2';
import Div3 from './div3';
import Div4 from './div4';

class App extends Component {
  render() {
    return (
      <div>
<Head />
<Div question="What is React?" description="React is a JavaScript library that focuses on user interfaces. React is NOT a framework. You can use React with other libraries and frameworks, for example Bootstrap or Materialize."  />
<Div question="Who made it?" description="React was developed by Jordan Walke, a software engineer at Facebook. The first deployment was with Facebook's newsfeed in 2011. It is maintained by developers and Facebook and Instagram. The first public release was in March 2013"   />
<Div question="What's a user interface?" description="The screens, pages, and visual elements (buttons, icons, menus) that you use to interact with a device or application."  />
<Div2 question="Who uses it?" />
<Div3 question="Why use React?" />
<Div4 />

</div>
    );
  }
}

export default App;
