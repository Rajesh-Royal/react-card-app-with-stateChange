import React, { Component } from 'react'

class Avatarlist extends Component {
    render() {
        return (
            <div className="cardwrap">
                <div className="card animated pulse infinite slower">
                    <img className="card-img-top" src={`https://joeschmoe.io/api/v1/male/${this.props.name}`} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Hire Me</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatarlist;