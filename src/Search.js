import React, { Component } from 'react'

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
                <form onSubmit={this.onSubmit}>
                    <input type='text'
                           placeholder='Search Movie'
                           value={this.state.text}
                           onChange={this.onChange}
                           />
                    <input type='submit' value='Search' />
                </form>
            </div>
        )
    }
}

export default Search
