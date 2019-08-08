import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllBlocks, fetchSpecificBlocks } from '../../actions/block_actions';
import LandingPage from './landing_page';

export const msp = state => {
    return {
        blocks: state.entities.block
    }
}

export const mdp = dispatch => {
    return {
        fetchAllBlocks: time => dispatch(fetchAllBlocks(time)),
        fetchSpecificBlocks: pool_name => dispatch(fetchSpecificBlocks(pool_name))
    }
}

export default withRouter(connect(msp, mdp)(LandingPage))