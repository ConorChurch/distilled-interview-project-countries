import '../App.css';
import React from 'react';
import axios from 'axios';
import '../style/style.css'

// Class to fetch all the countries from REST Countries API and
// Display them in a list on the page
export default class ListOfCountries extends React.Component { 

    // Constructor to initialise props variable/methods needed
    constructor(props){
        super(props)
        this.state={
        }
    }   
    // Want list to render when the appplication starts
    componentDidMount = () => {
        axios.get("https://restcountries.com/v2/all")
            .then(res => {
                if(res.status === 200){
                    this.setState({
                        countries: res.data
                    })
                    //console.log(this.state.countries)
                }
            }).catch((error) => {
               console.log(error)
            });
    }

    // Loop through list of countries and display info to the screen
    // Make each country clickable
    render(){
        return (
            <div>     
                <div>
                    <h1>Countries App</h1>
                    <div>
                        {this.state.countries?.map((country) => (
                            <div key={country.name} className='countryList' onClick={() => this.props.parentShowCountry(country)}>
                                <div style={{ "display": "inline-block",  "top": "20px", "textAlignLast": "left", "left": "0"}}>
                                    <img src={country.flags.png} />
                                </div>
                                <div style={{"verticalAlign": "top","textAlignLast": "left", "display": "inline-block",  "top": "0px", "padding": "20px"}}>
                                    <h2>{country.name}</h2>
                                    <p >Capital: {country.capital}</p>
                                </div>
                                <div style={{ "height": "0","textAlignLast": "left", "verticalAlign": "bottom", "bottom": "300px"}}>
                                <p>Population: {country.population}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
