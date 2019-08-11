import React from 'react'
import { withRouter } from 'react-router-dom'

class Address extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAddress(this.props.match.params.address)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default withRouter(Address)