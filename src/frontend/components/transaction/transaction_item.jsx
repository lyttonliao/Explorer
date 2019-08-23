import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/transaction.css'

class TransactionItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { hash, inputs, outputs, time, currVal } = this.props
        let inputAddr;
        
        if (inputs.length === 0) {
            inputAddr = <li><strong>No Inputs (Newly Generated Coin)</strong></li>
        } else {
            inputAddr = inputs.map((input, i) => {
                return <li key={i}><Link to={`/address/${input.address}`}>{input.address}</Link></li>
            }) 
        }
        const outputAddr = outputs.map((output, i) => {
            if (output.address) {
                return <li key={i}><Link to={`/address/${output.address}`}>{output.address}</Link></li>
            } else {
                return <li key={i} className="error-output"><strong>Unable to decode output address</strong></li>
            }
        })

        const arrowColor = currVal > 0 ? (
            <div className="tx-arrow-green">
                <i className="fas fa-arrow-right"></i>
            </div>
        ) : (
            <div className="tx-arrow-red">
                <i className="fas fa-arrow-right"></i>
            </div>
        )

        const valueColor = currVal > 0 ? (
            <div className="tx-value green">
                {currVal.toString().slice(0, 12) + " BTC"}
            </div>
        ) : (
                <div className="tx-value red">
                    {currVal.toString().slice(0, 12) + " BTC"}
                </div>
        )

        return (
            <div className="single-tx">
                <div className="tx-hash">
                    <Link to={`/transaction/${hash}`}>{hash}</Link>

                    <div className="tx-time">
                        {time}
                    </div>
                </div>
                <div className="tx-info">
                    <div className="in-addr-col">
                        <ul>{inputAddr}</ul>
                    </div>

                    {arrowColor}

                    <div className="out-addr-col">
                        <ul>{outputAddr}</ul>
                    </div>

                    {valueColor}

                </div>
            </div>
        )
    }
}

export default TransactionItem