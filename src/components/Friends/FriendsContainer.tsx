import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import Friends from './Friends';
import {FriendsBlockType} from '../../redux/sidebar-reducer';

type FriendsPropsType = {
    friendsBlock: Array<FriendsBlockType>
}

class FriendsContainer extends React.Component<FriendsPropsType> {
    render() {
        return (
            <Friends {...this.props} />
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        friendsBlock: state.sidebar.friendsBlock
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {})
)(FriendsContainer);
