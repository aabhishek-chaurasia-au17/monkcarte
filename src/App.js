import './App.css';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

import Navbar from '../src/components/Navabr/Navbar';
import Banner from './components/Banner/Banner'
import Subnavbar from './components/SubMenu/Subnavbar';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index />
        <Route path="teams">
          <Route path=":teamId"/>
          <Route path="new"/>
          <Route index/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter> */}
  <Subnavbar/>
    </>
  );
}

export default App;
