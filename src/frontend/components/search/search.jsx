import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
        }
    }

    

    render() {
        return (
            <input type="text" onChange={this.handleChange} value={this.state.text}></input>
        )
    }
}

export default Search