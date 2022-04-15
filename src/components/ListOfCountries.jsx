import '../App.css';
import React from 'react';


// Class to fetch all the countries from REST Countries API and
// Display them in a list on the page
class ListOfCountries extends React.Component { 


    constructor(){
        super()
        this.state={
            name: "",
            counrtries: [],
            countrySelected: false
        }
    }
        
    // Want list to render when the appplication starts
    componentDidMount = () => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => {
                if(res.data["status code"] === "200"){
                    
                    //this.setState[]
                }
            }).catch((error) => {
               console.log(error)
            });
    }

    render(){
        return (

            <h2>Hello</h2>


        )
    }

}