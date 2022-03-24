import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Contries = () => {

    const [data, setData] = useState([]) ;

    useEffect(() =>{

    axios.get("http://Springbootrestfullmysqlaws-env.eba-pstvcvvj.us-east-1.elasticbeanstalk.com/api/clients" ,
    { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ3MDEwNDExLCJleHAiOjE2NDc2MTUyMTF9.E1rtGv5_E7KnCxuh00_nbfNByjsY4frFHy3WQfJuY1IOc9udd8Prs4DSeeDA2bZa3ba9ACTGKoSmIEfYyDdKEA`} })
    .then((res) => setData(res.data)).catch((error) => console.log("ERROR")) ;

    console.log(data) ;

    }, []) ;

    return (
        <div className="contries">
          <ul className="contries-list">
              {data.map((clients) => (
                    <Cards clients = {clients} key = {clients.id} />          
              ))} 
          </ul>
           
        </div>
    ) ;
};

export default Contries ;