import React ,{useState} from "react";
import "./styles.css";
var data = { KLuniversity : [{placement:"90/100",jobs :"84/100", avgsalary : "87/100" , satisfaction : "78/100", liferating : "73/100",total :"412/500",percentage:"82.4%"}],
              VVIT: [{english:"86/100",hindi :"89/100", maths : "34/100", sst : "99/100", science : "98/100",total :"406/500",percentage:"81.2%"}],
             Parul : [{english:"60/100",hindi :"46/100", maths : "55/100", sst : "56/100", science : "33/100",total :"250/500",percentage:"50.4%"}],
             AMRITA : [{english:"69/100",hindi :"93/100", maths : "89/100", sst : "79/100", science : "78/100",total :"408/500",percentage:"81.6%"}]                       
}

export default function App() {

  var [up , setup] = useState("VVIT");
  function clickHandler(item){
    setup(item);
  }
  return (

    <div className ="APP">
      <div className="head" >STUDENTS DATA</div>
      <div className = "option">
        {
          Object.keys(data).map((item)=>(
            <button  onClick = {()=>clickHandler(item)} >{item}</button>
          ))
        }
      </div>
      <hr/>
      <div className="info">
        <ul style={{paddingLeft:0}}>
          {
            data[up].map((item)=>(
              <li style={{listStyleType:"none"}}>
              <div className ="sub"><pre><b>Placements</b>         :  {item.placement}</pre></div>
              <div className ="sub"><pre><b>Interns</b>           :  {item.jobs}</pre></div>
              <div className ="sub"><pre><b>AVG Salary</b>           :  {item.avgsalary}</pre></div>
              <div className ="sub"><pre><b>Satisfaction</b>  :  {item.satisfaction}</pre></div>
              <div className ="sub"><pre><b>Campus Life Rating</b>         :  {item.liferating}</pre></div>
              <div className ="sub"><pre><b>TOTAL</b>           :  {item.total}</pre></div>
              <div className ="sub"><pre><b>PERCENTAGE</b>      :  {item.percentage}</pre></div> 
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  );
}
