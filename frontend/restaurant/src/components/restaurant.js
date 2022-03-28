import React from 'react';
import axios from "axios";
import './restaurant.css'

class Restaurant extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        }
    }
    componentDidMount() {
        this.fechMenu();
    }
    async fechMenu(){
        const res = await axios.get('http://localhost:3003/api/menu');
        const menu = res.data;
        this.setState({menu});
    }


    render(){
        return(<article></article>
            // <div className="container">
            //     <h1>Menu:</h1>
            //
            //     {this.state.menu.map(e => {
            //         return(
            //             <div className="menu" key={e._id} >
            //                 <p>{e.name}</p>
            //                 <p>{e.price}</p>
            //             </div>
            //         );
            //     })}
            // </div>
        );
    }

}

export default Restaurant