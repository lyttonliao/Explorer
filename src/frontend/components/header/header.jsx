import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../images/explorer_icon.png'
// import SearchContainer from '../search/search_container';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <nav className="header">
                <div className="prim-nav-logo">
                    <Link to='/explorer'><img className="App-logo" src={logo} alt="Logo" /></Link>
                    <Link to='/explorer'><h1 className="home-button">Explorer</h1></Link>
                    <ul className="primary-nav">
                        {/* <SearchContainer /> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header