import  React, {useState, useEffect}  from 'react';
import { 
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  // STATE = How to write a variable in React

  //https://disease.sh/v3/covid-19/countries

  //USEEFECT = runs a piece of code based on a given condition

  useEffect(()=> {
    // the code inside here will run once when the component loads
    // and not again, only the [variable] changes

    //assync -> send a request, wait for it, do something with the answer
    const getCountriesData = async() => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          //what does map?
          //[item1, item2, item3]
          //ˆˆˆ item1 ... -> returning an object in a shape
          //ˆˆˆ item2 ... -> returning an object in a shape
          //ˆˆˆ item3 ......... 
          {
            name: country.country, //United Kingdom, United States, France
            value: country.countryInfo.iso2 //UK, USA, FR
          }
        ));

        setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
          
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">

        {countries.map((country) => (
          <MenuItem value={country.value}>{country.name}</MenuItem>
        ))}


          </Select>

        </FormControl>
      </div>

    </div>
  );
}

export default App;
