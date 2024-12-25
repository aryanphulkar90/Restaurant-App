import React from "react"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo: {}
        }
    }
    async componentDidMount(){
         const data = await fetch("https://api.github.com/users/aryanphulkar90")
         const json = await data.json()
         this.setState({
            userInfo:json
         })
    }
    render(){
        const {name} = this.state.userInfo
        return(
        <div>
          <h1>About</h1>
          <h2>This is Namaste React Web Series</h2>
          <UserClass name={name} location="India"/>
          <UserContext.Consumer>
            {
                (data) => {
                    return <h1>{data.loggedInUser}</h1>
                }
            }
          </UserContext.Consumer>
        </div>
        )
    }
}

export default About;