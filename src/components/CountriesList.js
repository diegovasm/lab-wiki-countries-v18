import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function CountriesList({ countriesData }) {
  const [countryDetails, setCountryDetails] = useState(countriesData);
  let dynamicUrl = "";

  return (
    <div>
      {countryDetails.map((country) => {
        dynamicUrl = "https://flagpedia.net/data/flags/icon/72x54/".concat(country.alpha2Code.toLowerCase()).concat(".png")
        
        return (
          
          <div className="country-list" key={country.alpha3Code}>
                <Link to={country.alpha3Code}>
                <img src={dynamicUrl} alt="Country flag" />
                <p>{country.name.common}</p>
                </Link>
            </div>
          
        );
      })}
    </div>
  );
}

export default CountriesList;
