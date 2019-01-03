import React   from 'react';
import './App.css';

const App = () => {

  return(
    <PersonList /> 
  )
 }

const Person = props => {
  const { img, name, job }= props.person;
  const{ children }=props
  const url=`https://randomuser.me/api/portraits/med/men/${img}.jpg`;

  return(
    <div className='person'> 
    <img src={url} alt=''/>
    <div>
    <h4>{name}</h4>
    <h4>{job}</h4>
    </div>
    </div>
  )
 }

const PersonList =() => {
  const People = [
    {
      img:22,name:'john',job:'dev' 
    },
    {
      img:23,name:'jbob',job:'devops' 
    }
  ]

  return(
    <section>
      <Person person={People[0]} /> 
      <Person person={People[1]}/> 
    </section>
    
  )
 }

export default App;
