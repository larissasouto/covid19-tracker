import  React, {useState}  from 'react';
import { 
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "Brazil"]);

  // STATE = How to write a variable in React

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
          
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">

        {countries.map((country) => (
          <MenuItem value={country}>{country}</MenuItem>

        ))}


          </Select>

        </FormControl>
      </div>

    </div>
  );
}

export default App;
