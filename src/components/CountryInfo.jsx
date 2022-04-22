import '../App.css';
import React from 'react';
import axios from 'axios';
import '../style/style.css'

// Class to fetch the specific country selected from the REST Countries API and
// Display the details of the country to the User
export default class CountryInfo extends React.Component { 

    // Constructor to initialise props variable/methods needed
    constructor(props){
      super(props)
      this.state={
          country: "",
          currency: "",
          name: "",
          flag: "",
          capital: "",
          languages: [],
          bordering: []
      }
      this.handleSubmit = this.handleSubmit.bind(this) 
    }
    // Receives the name from the App component of the clicked country
    // The Country information should display to the User when the page loads
    componentDidMount = () => {
        axios
        .get("https://restcountries.com/v2/name/"+this.props.selectedCountry.name)
        .then(res => {
            if(res.status === 200){
                this.setState({
                    country: res.data[0],
                    currency: res.data[0].currencies[0].code,
                    capital: res.data[0].capital,
                    languages: res.data[0].languages,
                    bordering: res.data[0].borders,
                    name: res.data[0].name,
                    flag: res.data[0].flags,
                    population: res.data[0].population
                })
            }
        }).catch((error) => {
            console.log(error)
        });
    }
    // When the back button is clicked the App component handles the boolean change
    // This will render the list again
    handleSubmit = () => {
        this.props.parentCallback()
    }

    // Renders the countries information to the screen
    render(){

        // Loops through languages of the country and outputs them
        // The last kanguage does not need a comman at the end
        const languages = []
        for(var i = 0; i < this.state.languages.length; i++){
            if(i !== this.state.languages.length-1){
                languages.push(
                    <div key={i} style={{"textAlignLast": "left", "display": "inline-block"}}> 
                        <p>  {this.state.languages[i].name}, </p>
                    </div>
                )
            }
            else if(i === this.state.languages.length-1){
                languages.push(
                    <div key={i} style={{"textAlignLast": "left", "display": "inline-block"}}> 
                        <p>  {this.state.languages[i].name} </p>
                    </div>
                )
            }
        }

        // Returns the information from the imported country
        return(
            <div>
                <h1>Countries App</h1>
                <div className='buttons'>
                    <button onClick={this.handleSubmit}>Back</button>
                </div>
                <div>
                    <img src={this.state.flag.png} />
                </div>
                <div className='selectedCountry'>
                    <p style={{"textAlignLast": "left"}}> {this.state.name}</p>
                    <p style={{"textAlignLast": "left"}}> Capital: {this.state.capital}</p>
                    <p style={{"textAlignLast": "left"}}> Population: {this.state.population}</p>
                    <p style={{"textAlignLast": "left"}}> Currency: {this.state.currency}</p>
                    <div style={{"textAlignLast": "left" }}> Languages: {languages}  </div>
                </div>
                <div>
                    <p className='bordering'>Bordering Countries</p>
                    {this.state.bordering?.map((country) => (
                                <div key={country} style={{"textAlignLast": "left", "display":"inline-block"}}>
                                    <p className="borders"> {country}</p>
                                </div>
                    ))}
                </div>
            </div>
        )
    }
}
