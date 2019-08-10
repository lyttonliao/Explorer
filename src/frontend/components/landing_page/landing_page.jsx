import React from 'react'
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const date = new Date()
        this.props.fetchAllBlocks(date.getTime())
    }

    blockTolist() {
        return Object.values(this.props.blocks).map((block, i) => {
            const date = new Date(block.time * 1000).toUTCString()
            const short_block_hash = block.hash.substring(0,23) + "..."
            return (
                <div key={i} className="block">
                    <div className="block-height"><Link to={`/block/${block.hash}`}>{block.height}</Link></div>
                    <div className="block-hash"><Link to={`/block/${block.hash}`}>{short_block_hash}</Link></div>
                    <div className="block-date">{date}</div>
                </div>
            )
        })
    }

    render() {
        if (this.props.blocks === {}) return null;

        return (
            <div className="landing-page">
                <div className="side-bar">

                </div>

                <div className="block-list">
                    <h2>Latest Blocks</h2>
                    <div className="block-columns">
                        <p className="height">Height</p>
                        <p className="hash">Hash</p>
                        <p className="time">Time</p>
                    </div>
                    {this.blockTolist()}
                </div>
            </div>
        )
    }
}

export default LandingPage