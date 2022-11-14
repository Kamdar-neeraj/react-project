import './App.css';
import DemoForm from "./Form.js"
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Layout from './Layout';
import Welcome from './Welcome';
import {RestAPIExample} from './Page1';
import { Page2 } from './Page2';
import Page3 from './Page3';

function App() {
  
  return (
    <>
  
    <BrowserRouter> 
    <Routes> 
      
        <Route  path="/" element={<Layout />} >
      
      <Route index element={<Welcome />}/>
      <Route path="form" element={<DemoForm />}/>
      <Route path="Welcome" element={<Welcome />}/>
      <Route path="Page1" element={<RestAPIExample />}/>
      <Route path="Page2" element={<Page2 />}/>
      <Route path="Page3" element={<Page3 />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
