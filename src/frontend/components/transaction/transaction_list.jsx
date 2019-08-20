import React from 'react';
import TransactionItem from './transaction_item';

class TransactionList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            page: 0,
            showAmount: '100',
            dropdown: false
        }
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

    diffPerTx(outputs) {
        let currVal = 0
        outputs.forEach(output => {
            currVal += parseFloat(output.value)
        })
        return currVal
    }

    createTxList() {
        const allTx = this.props.txsArr.map((tx, i) => {
            const hash = tx.hash
            const inputs = this.inputArr(tx.inputs) 
            const outputs = this.outputArr(tx.out)
            const time = this.convertToTime(tx.time)
            const currVal = this.diffPerTx(outputs)
            return (
                <TransactionItem
                    key={i}
                    hash={hash}
                    inputs={inputs}
                    outputs={outputs}
                    time={time}
                    currVal={currVal}
                />
            )
        })
        return allTx.slice(0,200)
    }

    render() {
        if (this.props.txsArr.length === undefined) return null;
        const TxList = this.createTxList()

        return (
            <div className="transaction-list">
                <h3 className="tx-title">Transactions</h3>
                {TxList}
            </div>
        )
    }

}

export default TransactionList