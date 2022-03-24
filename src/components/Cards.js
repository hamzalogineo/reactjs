
const Cards = (props) => {

    const {clients} = props ;

    const NumberFormat = (x) =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g , " ") ;
    }

    console.log(clients) ;

    return (

       <li className="card">
           <img src="./img/logo192.png" alt="flag"/>
           <div className="datat-container">
               <ul>
                    <li>ID. {NumberFormat(clients.id)}</li>
                    <li>PRENOM. {clients.prenom}</li>
                    <li>NOM. {clients.nom}</li>
                    <li>LOGIN. {clients.login}</li>
               </ul>

           </div>


       </li>

    );
};

export default Cards;