import Person from './Person/Person';
import React from 'react';
import './App.css';


class App extends React.Component{
  
  state={
    show : false
  }
  render() {
    return (
      <div>
          <button onClick={()=>this.setState({show : !this.state.show})}>{this.state.show ? 'Fermer' : 'Ouvrir'}</button>
       {this.state.show &&
       
        <Person fullName={"Youssef MSEKNI"} profession={"Joueur de Football"}
          bio={"2008-2013 : ES Tunis , 2013-2021 : Al-Duhail SC , 2021→   : Al-Arabi SC"}>
        </Person>
        
        }
        
        
      </div>
    )
  }
}

export default App;
