import ListOfCountries from "./components/ListOfCountries"
import CountryInfo from "./components/CountryInfo"
import React from "react";

// App component that will render the ListOfCountries component first
class App extends React.Component {

  // Initialise constructor with two state variables
  // One to keep track if a country is selected - countrySelected
  // Another to keep track of that country's info - selectedCountry
  constructor(props){
    super(props)
    this.state={
        selectedCountry: "",
        countrySelected: false
    }
    this.showCountry = this.showCountry.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
  }


  // Back button is pressed in CountryInfo child component 
  // Changes boolean and renders list of countries again
  handleCallback = () => {

    this.setState({
        nameOfSelectedCountry: "",
        countrySelected: false
    })
  }

  // Shows specific country and set boolean to set that country and remove list of countries
  showCountry = (country) => {
    this.setState({
        selectedCountry: country,
        countrySelected: true
    })
  }


  // Using conditional rendering for single page application to render components. 
  render(){
    return (
      <div className="App">
        {(this.state.countrySelected === false) && <ListOfCountries parentShowCountry = {this.showCountry} /> }
        {(this.state.countrySelected === true) && <CountryInfo  selectedCountry={this.state.selectedCountry} parentCallback = {this.handleCallback} />}
      </div>
    );
  }
}

export default App;
