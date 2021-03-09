import axios from 'axios';
import React from 'react';
import '../Style/Covid.css';
import Covidimg from '../Assets/covid19.jpg';
import pre1 from '../Assets/prec.jpg';
import pre2 from '../Assets/kumar.jpg';
class Covid extends React.Component{
constructor(){
  super();
  this.state={
    Country:[]  
  }
}

componentDidMount(){
  axios({
method:'GET',
url:'https://api.covid19api.com/summary',
headers:{'Content-Type':'application/json'}
  })
  .then(response=>this.setState({
       Country:response.data.Countries
    }))
.catch(err=>console.log(err))
}




render(){
const {Country}=this.state;
    return(
        <div>
  

  <div className="heading">
       <p>Fresher Solution && Support</p>
      </div>





<div className="top">
    <div className="top-left">
<img src={Covidimg} alt="image " />

    </div>
    <div className="top-right">
        <div className="heading1"><h1>About the Covid -19</h1>
        <div><p id="p"> As we know Coronavirus disease 2019 (Covid-19), a highly infectious disease, was first detected in Wuhan China.
            The disease has spread to 210 countries and territories around the world & infected (confirmed ) more than two million people
           .In India the disease was first detected on 30 January 2020 . Coronaviruses possess a distinctive morphology,
            the name being derived from the outer fringe, or “corona” of embedded envelope protein. now in this project we  are tracking live
             update of covid 19 world-wild like 
           total no of  confirme case ,total no of death ,total no of cured country wise </p></div>
        </div>
    </div>
</div>




<div className="covid-heading">
    <p>Live Update Of Covid-19 World-Wide</p>
</div>



<div className="tablex">

  <table id="example" className="table table-striped table-bordered table-hover" >
    <thead>
        <tr>
            <th >Date</th>
            <th>Country</th>
            <th >New-Confirmed</th>
            <th >New-Deaths</th>
            <th>New-Recovered</th>
            <th >Total-Confirmed</th>
            <th >Total-Deaths</th>
            <th >Total-Recovered</th>
        </tr>
    </thead>
    <tbody>
       
    {Country.map(item=>{return(
          <tr>
            
             <td> {item.Date}</td>
            <td>{item.Country}</td>
            <td>{item.NewConfirmed}</td>
            <td>{item.NewDeaths}</td>
            <td>{item.NewRecovered}</td>
            <td>{item.TotalConfirmed}</td>
            <td>{item.TotalDeaths}</td>
            <td>{item.TotalRecovered}</td>
          
           
          </tr>
        );
        })}
       
       
    </tbody>
   
</table>

</div>


<div className="covid-pre">
    <p>Precaution for Covid -19</p>
</div>

<div className="prec">
<div className="precaustion">
   <img src={pre1}alt=" image" id="xy" />
</div>

<div className="precaustion">
    <img src={pre2} alt=" image" id="xy" />
 </div>

</div>
 </div>
)
}
}

export default Covid;