import React from "react"
// import Temp from "./Temp"

class Person extends React.Component{
    constructor(){
        super()
        this.state = {
        count :0,

        }
    }
    componentDidMount (){
        this.myInterval = setInterval (() => {
            this.setState ( a=> ( {
      
              count : this.state.count +1
            }))
              
          } ,1000 )

    }
    render () {
        const {fullName,profession,bio,} = this.props
        const a = this.state.count
        return(
            <div>
              
                <div className="Contenu">
                {/* <Temp minRange={0} maxRage={0}/> */}
                <h4>{a}</h4>
              <h1>{fullName}</h1>
              <img src="/Youssef.jpg" alt="Not Found"/>
              <h3>{profession}</h3>
              <h5>{bio}</h5>
              </div>                          
              
            </div>
        )
    }
}
export default Person