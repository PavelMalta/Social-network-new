import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from "react-router-dom";


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
    getUserProfile: (userId: string) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component <PropsType>{

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)

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


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

