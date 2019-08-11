import React from 'react';

class TransactionList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            page: 0,
            showAmount: '50',
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
            const prev = input.prev_out
            const address = prev.addr
            const value = this.convertToBTC(prev.value)
            var newInput = {
                'address': address,
                'value': value,
            }
            newArr.push(newInput)
        })
        return modifiedInputs;
    }

    outputArr(outputs) {
        let modifiedOutputs = []
        outputs.forEach(out => {
            const address = out.addr
            const value = this.convertToBTC(out.value)
            var newOutput = {
                'address': address,
                'value': value,
            }
            modified_outputs.push(newOutput)
        })
        return modifiedOutputs
    }

    diffPerTx(from, to, address) {


    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

}

export default TransactionList