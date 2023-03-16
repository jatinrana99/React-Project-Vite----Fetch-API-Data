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

        return(
            items.map((item)=> {
                return(
                    <article key={item.id}
                     className="mainBox">
                        {/* upper div */}
                        <div className="upperDiv">
                            {/* left div */}
                            <div>
                                <h3 className="h3">
                                    {item.company.name}
                                </h3>
                                <h3 className="h3">
                                    {item.company.catchPhrase}
                                </h3>
                            </div>

                            {/* right div */}
                            <div>
                                <h4 className="h4">
                                    {item.phone}
                                </h4>
                                <h4 className="h4">
                                    {item.address.city}
                                </h4>
                            </div>
                        </div>
                            {/* lower div */}
                            <div className="lowerDiv">
                                <h2 className="h2">
                                    {item.company.bs}
                                </h2>
                                <h2 className="h2">
                                    {item.name}
                                </h2>
                                <h2 className="h2">
                                    {item.email}
                                </h2>
                            </div>
                    </article>
                )
            })
        )
    }
}