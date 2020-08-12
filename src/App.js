import React from 'react';
import { 
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        
      </div>
      <h1>COVID-19 TRACKER</h1>

      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">

          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>

        </Select>

      </FormControl>
    </div>
  );
}

export default App;
