import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Log from './session/Admin/Auth/Login';
function App()
{
    return(
<div>
<BrowserRouter>
<Routes>
<Route path='/Login' element={<Log/>}/>





</Routes>




</BrowserRouter>



</div>


    );
}
export default App;

