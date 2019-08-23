import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { timeout } from 'q';
import '../../../css/landing_page.css'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const date = new Date()
        this.props.fetchAllBlocks(date.getTime())
    }

    convertToTime(unix) {
        const date = new Date(unix * 1000)
        return date.toLocaleDateString('default', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})
    }

    blockTolist() {
        return Object.values(this.props.blocks).map((block, i) => {
            // const short_block_hash = block.hash.substring(0,23) + "..."
            const time = this.convertToTime(block.time)
            return (
                <div key={i} className="block">
                    <div className="block-height"><Link to={`/block/${block.hash}`}>{block.height}</Link></div>
                    <div className="block-hash"><Link to={`/block/${block.hash}`}>{block.hash}</Link></div>
                    <div className="block-date">{time}</div>
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

export default withRouter(LandingPage)