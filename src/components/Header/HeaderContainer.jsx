import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../redux/auth-reducer";
import { toggleFollowingProgress } from './../../redux/users-reducer';
import Preloader from './../common/Preloader/Preloader';

class HeaderContainer extends React.Component {
    
    componentDidMount() {
        this.props.auth(this.props.id,this.props.email, this.props.login);
   
    }
 
    render()
       {        return <>
            
            { this.props.isFetching ? <Preloader /> : <Header {...this.props} /> }
            
        </>
        
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {auth, toggleFollowingProgress })(HeaderContainer);