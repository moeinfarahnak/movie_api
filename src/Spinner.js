import React, { Component } from 'react'
import spinner from './Eclipse-1s-200px.gif';

export class Spinner extends Component {
    render() {
        return (
            <>
                <img src={spinner} alt='Loading...' style={{width: '200px', margin: 'auto', display: 'block'}}></img>
            </>
        )
    }
}

export default Spinner
