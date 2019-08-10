import React from 'react'

class Address extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAddress(this.props.address)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Address