import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
	<h1> Welcome!! </h1>  
	<p>
         <a href="https://www.amazon.com/baby-reg/rahul-kulkarni-deepthirao-kulkarni-june-2023-sammamish/AKJK0E8CADW3?ref_=cm_sw_r_cp_ud_dp_X6FMDYRYE45FFREG6VDK">Amazon</a><br/>
	 <a href="https://www.target.com/gift-registry/gift/raaga-deepa">Target</a><br/>
	 <a href="https://www.walmart.com/registry/BR/889d0987-7327-4d77-920e-caba534f457e">Walmart</a><br/>
	</p>
      </header>
    </div>
  );
}

export default App;
