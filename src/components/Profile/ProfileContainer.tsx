import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {setUserProfile} from "../../redux/profile-reducer";

type MapStateToPropsType ={
    profile: any
}

class ProfileContainer extends React.Component <any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

// @ts-ignore
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
 profile: state.profilePage.profile
})
// @ts-ignore
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

