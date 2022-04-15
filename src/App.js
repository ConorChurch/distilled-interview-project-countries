import ListOfCountries from "./components/ListOfCountries"
import CountryInfo from "./components/CountryInfo"

function App() {
  return (
    <div className="App">
      {<ListOfCountries/>}
      {<CountryInfo/>}
    </div>
  );
}

export default App;
