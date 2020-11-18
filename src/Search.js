import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchMovies(this.state.text);
    }
    onChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form id='search-form' onSubmit={this.onSubmit}>
                    <input className='search-input'
                           type='text'
                           placeholder='Search Movie'
                           value={this.state.text}
                           onChange={this.onChange}
                           />
                    <input className='search-submit' type='submit' value='Search' />
                </form>
            </div>
        )
    }
}

export default Search
