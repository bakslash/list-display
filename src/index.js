import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*function User() {
    const clients = [
        {name:'john', company:'twitter', contact:'09855'},
        {name:'john', company:'twitter', contact:'09855'},
        {name:'john', company:'twitter', contact:'09855'},
    ]
    return(
       <div>
            
           <Person person={clients[0]}/>
            <Person person={clients[1]}/>
            <Person person={clients[2]} />

       </div> 

    )
}
 const Person = props => {
     const{name,company,contact} = props.person
 return(  
     <div>
         
         <h1>{ name}</h1>
         <p>{contact}</p>
         <p>{company}</p>
         <button>paid</button>
         <hr />
     </div>
 );
}
 */


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
 
