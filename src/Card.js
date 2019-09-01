import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import 'animate.css'
import Avatarlist from './Avatarlist'


class Card extends Component {
    constructor() {
        super();
        this.state = {
            heading: "Hello, This Is my first react Project :)"
        }
    }
    headchange (){
        this.setState({
            heading:"Boom!"
        })
    }

    render() {

        const avatararray = [
            {
                name: "Rajesh"
            },
            {
                name: "Pappy"
            },
            {
                name: "Chetan"
            },
            {
                name: "Aarvi"
            }
        ]

        const avatarlistarray = avatararray.map((avatar, i) => <Avatarlist name={avatararray[i].name} />)

        return (
            <div>
                <h1 className="text-center">{this.state.heading}</h1>
                {avatarlistarray}
                <div className="col-md-12 center-block btncenter"> <button className="btn center-block" onClick={()=>this.headchange()}>Click Me</button></div>
            </div>

        )
    }
}

export default Card;
