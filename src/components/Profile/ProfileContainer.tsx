import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string,
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component <ProfileContainerPropsType>{

    componentDidMount() {
       // @ts-ignore
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
 profile: state.profilePage.profile
})

// @ts-ignore
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

