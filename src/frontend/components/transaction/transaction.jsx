import React from 'react';
import TransactionItem from './transaction_item';
// import { Link } from 'react-router-dom';

class Transaction extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchTx(this.props.match.params.tx)
    }

    convertToTime(unix) {
        const date = new Date(unix * 1000)
        return date.toLocaleDateString('default', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })
    }

    convertToBTC(value) {
        return value / 100000000
    }

    inputArr(inputs) {
        let modifiedInputs = []
        inputs.forEach(input => {
            if (input.prev_out !== undefined) {
                const prev = input.prev_out
                const address = prev.addr
                const value = this.convertToBTC(prev.value)
                var newInput = {
                    'address': address,
                    'value': value,
                }
                modifiedInputs.push(newInput)
            }
        })
        return modifiedInputs;
    }

    outputArr(outputs) {
        let modifiedOutputs = []
        outputs.forEach(out => {
            const address = out.addr
            const value = this.convertToBTC(out.value)
            const newOutput = {
                'address': address,
                'value': value,
            }
            modifiedOutputs.push(newOutput)
        })
        return modifiedOutputs
    }

    totalInput(inputs) {
        let prevVal = 0
        inputs.forEach(input => {
            prevVal += parseFloat(input.val) || 0
        })
        return prevVal;
    }

    diffPerTx(outputs) {
        let currVal = 0
        outputs.forEach(output => {
            currVal += parseFloat(output.value)
        })
        return currVal
    }

    createTxItem () {
        debugger
        const { tx } = this.props
        const hash = tx.hash
        const inputs = this.inputArr(tx.inputs)
        const outputs = this.outputArr(tx.out)
        const currVal = this.diffPerTx(outputs)
        return (
            <TransactionItem 
                hash={hash}
                inputs={inputs}
                outputs={outputs}
                currVal={currVal}
            />
        )
    }

    render() {
        const { tx } = this.props
        if (Object.values(tx).length === 0) return null;

        debugger

        const txItem = this.createTxItem()
        const inputs = this.inputArr(tx.inputs)
        const outputs = this.outputArr(tx.out)
        const currVal = this.diffPerTx(outputs)
        const prevVal = this.totalInput(inputs)
        const time = this.convertToTime(tx.time)

        return (
            <div className="tx-page">
                <h3 className="tx-title">Transactions</h3>

                {txItem}
                <div className="tx-desc">
                    <div className="tx-desc-1">
                        <div className="tx-summary-row">
                            <h3 className="tx-summary">Summary</h3>
                        </div>
                        <div className="tx-row">
                            <p>Weight</p>
                            <p>{tx.weight}</p>
                        </div>
                        <div className="tx-row">
                            <p>Size</p>
                            <p>{tx.size}</p>
                        </div>
                        <div className="tx-row">
                            <p>Received Time</p>
                            <p>{time}</p>
                        </div>
                        <div className="tx-row last">
                            <p>Included In Block</p>
                            <p>{tx.block_height}</p>
                        </div>
                    </div>
                    <div className="tx-desc-2">
                        <div className="tx-summary-row">
                            <h3 className="tx-summary">Inputs and Outputs</h3>
                        </div>
                        <div className="tx-row">
                            <p>Total Input</p>
                            <p>{prevVal}</p>
                        </div>
                        <div className="tx-row last">
                            <p>Total Output</p>
                            <p>{currVal}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transaction