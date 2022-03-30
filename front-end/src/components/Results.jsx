import React,{useState,useEffect} from 'react';
import '../server-api/results.json';

function Results() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('results.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="Results">
     {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
    </div>
  );
}

export default Results;