import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
       authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} =response.data.data;
                    this.props.setAuthUserDataAC(id, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);