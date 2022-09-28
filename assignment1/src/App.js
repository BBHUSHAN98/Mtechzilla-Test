import React from 'react'
import Login from './Login';
import {Routes, Route } from "react-router-dom";
import Timer from './Timer';


function App() {
return (
<Routes>
        <Route path='/'element={<Login/>} />  
        <Route path='/Timer' element={<Timer/>} />  
                
</Routes>
    
)
}

export default App;
