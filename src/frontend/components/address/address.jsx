import React from 'react'
import { Link } from 'react-router-dom'
import TransactionList from '../transaction/transaction_list'
import './../../../css/address.css'

class Address extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
<<<<<<< HEAD
        this.props.fetchAddress(this.props.match.params.address).catch(() => {
            this.props.history.push(`/search/${this.props.match.params.address}`)
        })
=======
        this.props.fetchAddress(this.props.match.params.address)
>>>>>>> parent of 57ca5783... Updates
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.address !== nextProps.match.params.address) {
<<<<<<< HEAD
=======
            debugger
>>>>>>> parent of 57ca5783... Updates
            this.props.fetchAddress(nextProps.match.params.address);
        }
    }

    convertToBTC(value) {
        return value / 100000000
    }

    render() {
        const { address } = this.props;
        if (Object.entries(address).length === 0) return null;
        let total_received = this.convertToBTC(address.total_received)
        total_received = total_received >= 0 ? (<strong className="balance green">{total_received} BTC</strong>) : (<strong className="balance red">{total_received} BTC</strong>)
        let final_balance = this.convertToBTC(address.final_balance)
        final_balance = final_balance >= 0 ? (<strong className="balance green">{final_balance} BTC</strong>) : (<strong className="balance red">{final_balance} BTC</strong>)
        return (
            <div>
                <div className="single-address">
                    <h3 className="address-pg-height"><strong>Bitcoin Address</strong><p className="address-pg-extra"> &nbsp; Addresses are identifiers which you use to send bitcoins to another person.</p></h3>
                    <div className="address-info">
                        <div className="address-row">
                            <p className="address-hash summary"><strong>Summary</strong></p>
                        </div>
                        <div className="address-row">
                            <p>Address</p>
                            <p className="address-hash"><Link to={`/address/${address.address}`}>{address.address}</Link></p>
                        </div>
                        <div className="address-row">
                            <p>Hash 160</p>
                            <p className="address-hash"><Link to={`/address/${address.hash160}`}>{address.hash160}</Link></p>
                        </div>
                        <div className="address-row">
                            <p className="address-hash"><strong>Transactions</strong></p>
                        </div>
                        <div className="address-row">
                            <p>No. Transactions</p>
                            <p className="address-hash">{address.n_tx}</p>
                        </div>
                        <div className="address-row">
                            <p>Total Received</p>
                            <p className="address-hash">{total_received}</p>
                        </div>
                        <div className="address-row">
                            <p>Final Balance</p>
                            <p className="address-hash">{final_balance}</p>
                        </div>
                    </div>
                    <TransactionList txsArr={address.txs} />
                </div>
            </div>
        )
    }
}

export default Address