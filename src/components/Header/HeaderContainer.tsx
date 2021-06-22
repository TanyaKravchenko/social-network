import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
       this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    getAuthUserData,
    logout
})(HeaderContainer);
