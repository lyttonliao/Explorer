import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../../css/search_error.css';

function SearchError(props) {
    const doubleBack = () => {
        props.history.go(-2)
    }

    return (
        <div className="search-error-page">
            <div className="error-message">
                <h2>Oops! We couldn't find what you are looking for.</h2>
                <h3><strong className="error-address">"{props.match.params.address}"</strong> is not a valid address. Please enter an address.</h3>
                <button className="double-back" onClick={doubleBack}>Return to Previous Page</button>
            </div>
        </div>
    );
};

export default withRouter(SearchError);
