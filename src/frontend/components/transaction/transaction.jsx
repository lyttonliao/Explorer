import React from 'react'
import TransactionItem from './transaction_item'

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

    inputArr(inputs) {
        let modifiedInputs = []
        inputs.forEach(input => {
            // debugger
            if (input.prev_out !== undefined) {
                // debugger
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
            // debugger
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

    diffPerTx(output) {
        let currVal = 0
        output.forEach(output => {
            currVal += parseFloat(output.value)
        })
        return currVal
    }

    createTxItem () {
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
        if (this.props.tx === undefine) return null;

        txItem = this.createTxItem()

        return (
            <div className="tx-page">
                <h3 className="tx-title">Transactions</h3>
                {txItem}
            </div>
        )
    }
}

export default Transaction