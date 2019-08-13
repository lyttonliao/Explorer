import React from 'react'
import { Link } from 'react-router-dom'

class Address extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchAddress(this.props.match.params.address)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Address