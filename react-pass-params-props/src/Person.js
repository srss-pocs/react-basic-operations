import React from "react";

class Person extends React.Component {
       
    render(){
        console.log(this.props)
        return (<h1>Hi {this.props.name}-{this.props.age}</h1>)
    }
}

export default Person;