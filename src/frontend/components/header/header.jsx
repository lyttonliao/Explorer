import React from 'react';
// import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <nav className="main-header">
                <div className="prim-nav-logo">
                    <Link to='/explorer'><img className="blockchain-logo" src={window.logo} alt="Logo" /></Link>
                    <ul className="primary-nav">
                        <SearchContainer />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar