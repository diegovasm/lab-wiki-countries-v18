import { Link, useParams } from "react-router-dom"
import { useState } from 'react';

function CountryDetails({countriesData}){

  const [countryDetails, setCountryDetails] = useState(countriesData);
  let {alpha3Code} = useParams();
  

    let country = countryDetails.filter((current)=> current.alpha3Code === alpha3Code)
    let linkTo = "/:".concat(country.alpha3Code);
    return(


        <div class="col-4">
            <h1>{country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><Link to={linkTo}>{country.name.common}</Link></li>
                      <li><Link to={linkTo}>{country.name.common}</Link></li>
                      <li><Link to={linkTo}>{country.name.common}</Link></li>
                      <li><Link to={linkTo}>{country.name.common}</Link></li>
                      <li><Link to={linkTo}>{country.name.common}</Link></li>
                      <li><Link to={linkTo}>{country.name.common}</Link></li>
                      <li><Link to={linkTo}>{country.name.common}</Link></li>
                      <li><Link to={linkTo}>{country.name.common}</Link></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

    )

}
export default CountryDetails

