import React from 'react'

class Transaction extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTx(this.props.tx.hash)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Transaction