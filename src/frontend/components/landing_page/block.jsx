import React from 'react'

class Block extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBlock(this.props.match.params.block_hash)
    }

    render() {
        const { current_block } = this.props
        const time = new Date(current_block.time * 1000).toUTCString()
        if (Object.entries(current_block).length === 0) return null;
        debugger
        return (
            <div className="single-block">

                <div className="block-info-1">
                    <h3 >Block #{current_block.height}</h3>
                    <div className="summary-row">
                        <p className="summary">Summary</p>
                    </div>
                    <div className="row">
                        <p>Number of Transaction</p>
                        <p>{current_block.n_tx}</p>
                    </div>
                    <div className="row">
                        <p>Height</p>
                        <p>{current_block.height}</p>
                    </div>
                    <div className="row">
                        <p>Timestamp</p>
                        <p>{time}</p>
                    </div>
                    <div className="row">
                        <p>Bits</p>
                        <p>{current_block.bits}</p>
                    </div>
                    <div className="row">
                        <p>Size</p>
                        <p>{current_block.size}</p>
                    </div>
                    <div className="row">
                        <p>Version</p>
                        <p>{current_block.ver}</p>
                    </div>
                    <div className="row">
                        <p>Nonce</p>
                        <p>{current_block.nonce}</p>
                    </div>
                </div>

                {/* <div className="block-info-2">
                    <div className="row">
                        <p>Hash</p>
                        <p>{current_block.hash}</p>
                    </div>
                    <div className="row">
                        <p>Prev Block</p>
                        <p>{current_block.prev_block}</p>
                    </div>
                    <div className="row">
                        <p>Next Block(s)</p>
                        <p>{current_block.next_block}</p>
                    </div>
                    <div className="row">
                        <p>Merkle Root</p>
                        <p>{current_block.mrkl_root}</p>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Block