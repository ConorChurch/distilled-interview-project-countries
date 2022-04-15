import '../App.css';
import React from 'react';


// Class to fetch the specific country selected from the REST Countries API and
// Display the details of the country to the User
class CountryInfo extends React.Component { 


    constructor(props){
      super(props)
      this.state={
          name: ""
      }
    }




    // The Country information should display to the User when the page loads
    componentDidMount = () => {
        axios
            .get("https://restcountries.com/v3.1/name/"+this.state.name)
            .then(res => {
                if(res.data["status code"] === "200"){
 
                }
            }).catch((error) => {
               
            });
      }


    render(){
        return(

            <h2>Hello</h2>




        )




    }

}