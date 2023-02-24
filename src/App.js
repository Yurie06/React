import { useState } from "react";
import './App.css';
var data = require("./MOCK_Data.json");



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <br></br>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <div className="button">
                        <button onclick="box()">Click me</button>
                      </div>
                      
                      <div id="box">Rare Cat 
                      {val.text}</div>
                     
                
                                  
                      
                      
                    
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;