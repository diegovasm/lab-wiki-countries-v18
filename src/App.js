import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useParams } from "react-router-dom"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';

function App() {

  let {alpha3Code} = useParams();
  let pathAlpha = "/:".concat(alpha3Code)

  return (

    <div className="App">
      <Navbar/>
      <div class="container">
        <div class="col-1">
          
            
            <CountriesList countriesData={countriesData}/>
 
            <Routes>
                <Route path={pathAlpha} element={<CountryDetails countriesData={countriesData}/>}/>
            </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
