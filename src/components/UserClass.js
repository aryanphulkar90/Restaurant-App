import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            count: 0
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>{console.log("Aryan")},2000)
    }

    componentWillUnmount(){
     clearInterval(this.timer)
    }
    render(){
        const {count} = this.state
        const {name,location} = this.props
        return (
            <div className="user-card">
             <h3>Name : {name}</h3>
             <h3>Location : {location}</h3>
             <h3>Like: {count}</h3>
             <button
                onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}
             >
                Increase Count
            </button>
            </div>
        )
    }
}

export default UserClass;