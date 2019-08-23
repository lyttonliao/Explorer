import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchBlock } from '../../actions/block_actions'
import Block from './block'


export const msp = (state) => {
    const current_block = state.current_block
    return {  
        blocks: state.entities.blocks,
        current_block: current_block,
    }
}

export const mdp = dispatch => {
    return {
        fetchBlock: block_hash => dispatch(fetchBlock(block_hash))
    }
}

export default withRouter(connect(msp, mdp)(Block))