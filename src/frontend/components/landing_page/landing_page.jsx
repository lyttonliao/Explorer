import React from 'react'
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const date = new Date()
        this.props.fetchAllBlocks(date.getTime())
        // this.props.fetch
    }

    render() {
        debugger
        return (
            <div>
                
            </div>
        )
    }
}

export default LandingPage