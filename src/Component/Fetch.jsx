import React , {Component} from "react";
export default class Fetch extends Component{
    constructor(props){
        super(props);

        this.state = {
            items : [],
        };
    }


    componentDidMount(){
        fetch(
            "https://jsonplaceholder.typicode.com/users"
        )

        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items:json,
            });
        })
    }


    render(){
        const {items}= this.state;

        return()
    }
}