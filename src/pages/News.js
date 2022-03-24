import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../components/Logo" ;
import Navigation from "../components/Navigation" ;
import TableauPagination from '../components/TableauPagination' ;

const News = () => {

    const [data , setData] = useState([]) ;

    var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ3MDEwNDExLCJleHAiOjE2NDc2MTUyMTF9.E1rtGv5_E7KnCxuh00_nbfNByjsY4frFHy3WQfJuY1IOc9udd8Prs4DSeeDA2bZa3ba9ACTGKoSmIEfYyDdKEA" ;

    
 
    
    const getData = () => {

        axios.get("http://Springbootrestfullmysqlaws-env.eba-pstvcvvj.us-east-1.elasticbeanstalk.com/api/clients" ,
    { headers: {"Authorization" : `Bearer ${token}`} })
    .then((res) => setData(res.data)) ;

            console.log(data) ;
 
    }   


    useEffect(() => {

        getData() 
        const interval = setInterval(()=>{
            getData()
         },15000)
           
           
         return() => clearInterval(interval)
   
    } , []) ;

     
    return (
        <div className='News'> 

        <Logo />    
        <Navigation />

           <h1>CECI EST UN NEW COMPONENT DE NEWS.</h1> 

           <form>

             <input type="text" placeholder="CLIENT NAME" />
             <textarea placeholder="CLIENT Message"></textarea>
             <input type="submit" value="ENVOYER" />

           </form> <br />

        <TableauPagination donnee = {data} />

        </div>
    );
};

export default News;