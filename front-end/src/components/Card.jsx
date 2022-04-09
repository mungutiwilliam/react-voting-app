import React from "react";
import { useState } from 'react';
import './card-style.css';
import Card from "./CardUI";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
  return(
  <div>
    <header className="App-header">
      <h1>ABC University</h1>
    </header>
    <h2>Cast your Vote:</h2>
  </div>
  )
}
function Mid(){
  return(
  <div>
    <header className="App-mid">
      <h1>Click the button to view results: {" "}</h1>
      </header>
  </div>
  )
}


function Voting(){
    const [data, setData] =useState('');
    const [submitted, setSubmitted] =useState(false);
  
    const serverHost = 'http://localhost:4000';
    async function addvote(vote){
      const url = serverHost + '/results';
      const options = {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(vote)
      }
      const response = await fetch(url, options);
      if (response.status == 200){
        setSubmitted(true);
      }
    }
  
    const handleChange = (e) =>{
        const name = e.target.name;
        const value= e.target.value;
  
        const currentInputFieldData = {
          [name]:value      
        }
  
        const updateData = {
          ...data,
          ...currentInputFieldData
        }
        setData(updateData);
      }
        const handleSubmit = (e) => {
        addvote(data);
        e.preventDefault();
        }

        return (
            
            <div id ="main" className=" bg-info container-fluid d-flex justify-content-center">
              
                {!submitted ?
                <form onSubmit = {handleSubmit} method="post" required >
                  <div class="heading">
                    <Header/>
                  </div>
                <div className="row text-white ">
                    <div className="col-md-4">
                        <Card title="Chairperson"/> 
                        <img class="image"src = {process.env.PUBLIC_URL + '/images/m/1.jpg'} alt="William" />
                         <label class="labelling" for="William">
                           <input type="radio" id="candidate" name ='Charirperson' value ='William' onChange={handleChange}/>
                        William</label> 

                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/m/2.jpg'} alt="Jack"/>
                        <label class="labelling" for="Jack">
                          <input type="radio" id="candidate" name ='Charirperson' value ='Jack' onChange={handleChange}/>
                          Jack</label><br></br>

                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/f/1.jpg'} alt="Loulou"/>
                        <label class="labelling" for="Loulou">
                          <input type="radio" id="candidate" name ='Charirperson' value ='Loulou' onChange={handleChange}/>
                          Loulou
                        </label>
                        <br></br><br></br>
                    </div>
                    <div className="col-md-4">
                        <Card title="Vice President"/> 
                        <img class="image" src = {process.env.PUBLIC_URL + '/images/f/2.jpg'} alt="Jane"/>
                        <label class="labelling" for="Jane">
                        <input type="radio" id="candidate" name ='Vice-President' value ='Jane' onChange={handleChange}/>
                        Jane</label><br></br>
                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/f/3.jpg'} alt="Martha"/>
                        <label class="labelling" for="Martha">
                        <input type="radio" id="candidate" name ='Vice-President' value ='Martha' onChange={handleChange}/>
                        Martha</label><br></br>
                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/f/4.jpg'} alt="Maria"/>
                        <label class="labelling" for="Maria">
                        <input type="radio" id="candidate" name ='Vice-President' value ='Maria' onChange={handleChange}/>
                        Maria</label><br></br>
                        <br></br><br></br>
                    </div>
                    <div className="col-md-4">
                      <Card title="Secretary General"/> 
                        <img class="image" src = {process.env.PUBLIC_URL + '/images/f/5.jpg'} alt="Brenda"/>
                        <label class="labelling" for="Brenda">
                        <input type="radio" id="candidate" name ='Secretary-General' value ='Brenda' onChange={handleChange}/>
                        Brenda</label><br></br>
                        <br></br><br></br>

                        <img class="image"src = {process.env.PUBLIC_URL + '/images/m/3.jpg'} alt="Caesar"/>
                        <label class="labelling" for="Caesar">
                        <input type="radio" id="candidate" name ='Secretary-General' value ='Caesar' onChange={handleChange}/>
                        Caesar</label><br></br>
                        <br></br><br></br>
                        
                        <img class="image" src = {process.env.PUBLIC_URL + '/images/m/4.jpg'} alt="Peter"/>
                        <label class="labelling" for="Peter">
                          <input type="radio" id="candidate" name ='Secretary-General' value ='Peter' onChange={handleChange}/>
                        Peter</label><br></br>
                        <br></br><br></br>
                    </div>
                    <div className="col-md-4">
                        <Card title="Deputy Secretary General"/>
                        <img class="image" src = {process.env.PUBLIC_URL + '/images/m/5.jpg'} alt="Noah"/>
                        <label class="labelling"for="Noah">
                        <input type="radio" id="candidate" name ='Deputy-Secretary-General' value ='Noah' onChange={handleChange}/>
                        Noah</label>
                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/m/6.jpg'} alt="Oliver"/>
                        <label class="labelling" for="Oliver">
                        <input type="radio" id="candidate" name ='Deputy-Secretary-General' value ='Oliver' onChange={handleChange}/>
                        Oliver</label>
                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/f/6.jpg'} alt="Jean"/>
                        <label class="labelling" for="Jean">
                        <input type="radio" id="candidate" name ='Deputy-Secretary-General' value ='Jean' onChange={handleChange}/>
                        Jean</label>
                        <br></br><br></br>
                        
                    </div>
                    <div className="col-md-4">
                        <Card title="Council Treasurer"/> 
                        <img class="image" src = {process.env.PUBLIC_URL + '/images/m/7.jpg'} alt="Liamson"/>
                        <label class="labelling" for="Liamson">
                        <input type="radio" id="candidate" name ='Council-Treasurer' value ='Liamson' onChange={handleChange}/>
                        Liamson</label><br></br>
                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/m/9.jpg'} alt="Joshua"/>
                        <label class="labelling" for="Joshua">
                        <input type="radio" id="candidate" name ='Council-Treasurer' value ='Joshua' onChange={handleChange}/>
                        Joshua</label><br></br>
                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/m/8.jpg'} alt="Tchalla"/>
                        <label class="labelling" for="Tchalla">
                        <input type="radio" id="candidate" name ='Council-Treasurer' value ='Tchalla' onChange={handleChange}/>
                        Tchalla</label><br></br>
                        <br></br><br></br>

                    </div>
                    <div className="col-md-4">
                        <Card title="Council Spokesperson"/> 
                        <img class="image" src = {process.env.PUBLIC_URL + '/images/f/17.jpg'} alt="Alice"/>
                        <label class="labelling" for="Alice">
                        <input type="radio" id="candidate" name ='Council-Spokesperson' value ='Alice' onChange={handleChange}/>
                        Alice</label><br></br>
                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/f/8.jpg'} alt="Nzisa"/>
                        <label class="labelling" for="Nzisa">
                        <input type="radio" id="candidate" name ='Council-Spokesperson' value ='Nzisa' onChange={handleChange}/>
                        Nzisa</label><br></br>
                        <br></br><br></br>

                        <img class="image" src = {process.env.PUBLIC_URL + '/images/m/10.jpg'} alt="Peter"/>
                        <label class="labelling" for="Peter">
                        <input type="radio" id="candidate" name ='Council-Spokesperson' value ='Peter' onChange={handleChange}/>
                        Peter</label><br></br>
                        <br></br><br></br>

                    </div>
                    <hr />
                    <hr />                   
                </div>
                <center>
                <input type='submit' value= 'Submit'/>
                </center>
                </form>
               :
                <p class ="end">Your Vote has been casted!
                  <Mid />
                    <button><a href="http://localhost:4000/results">Results</a></button>
                </p>
                }
            </div> 
        );
}

export default Voting;