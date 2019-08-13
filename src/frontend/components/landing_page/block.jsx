import React from 'react'
import { Link } from 'react-router-dom'
import TransactionList from '../transaction/transaction_list';


class Block extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const block_hash = this.props.match.params.block_hash
        this.props.fetchBlock(block_hash)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.block_hash !== nextProps.match.params.block_hash) {
            this.props.fetchBlock(nextProps.match.params.block_hash);
        }
    }

    convertToTime(unix) {
        const date = new Date(unix * 1000)
        return date.toLocaleDateString('default', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })
    }

    render() {
        const { current_block } = this.props
        var time = this.convertToTime(current_block.time)
        if (Object.entries(current_block).length === 0) return null;

        return (
            <div>
                <div className="single-block">
                    <h3 >Block #{current_block.height}</h3>
                    <div className="block-info">
                        <div className="block-info-1">
                            <div className="block-summary-row">
                                <p className="block-summary">Summary</p>
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

                        <div className="block-info-2">
                            <div className="block-summary-row">
                                <p className="block-summary">Hash</p>
                            </div>
                            <div className="row">
                                <p>Hash</p>
                                <p className="block-hash"><Link to={`/block/${current_block.hash}`}>{current_block.hash}</Link></p>
                            </div>
                            <div className="row">
                                <p>Prev Block</p>
                                <p className="block-hash"><Link to={`/block/${current_block.prev_block}`}>{current_block.prev_block}</Link></p>
                            </div>
                            <div className="row">
                                <p>Next Block(s)</p>
                                <p className="block-hash"><Link to={`/block/${current_block.next_block}`}>{current_block.next_block}</Link></p>
                            </div>
                            <div className="row">
                                <p>Merkle Root</p>
                                <p className="block-hash">{current_block.mrkl_root}</p>
                            </div>
                        </div>
                    </div>
                    <TransactionList txsArr={current_block.tx}/>
                </div>
            </div>
        )
    }
}

export default Block