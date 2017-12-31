import { createAction } from 'typesafe-actions';
import * as ActionTypes from '../ActionTypes';
import * as Appstate from '../States/AppState';

export const Actions = {
    userLogIn: createAction(ActionTypes.USER_LOG_ON),

    userLogOff: createAction(ActionTypes.USER_LOG_OFF),

    usercenterPageLoadUnfinish: createAction(ActionTypes.USER_CENTER_PAGE_LOAD_UNFINISH),
    
    usercenterPageLoadFinish: createAction(ActionTypes.USER_CENTER_PAGE_LOAD_FINISH, (totalPage: number) => ({
        type: ActionTypes.USER_CENTER_PAGE_LOAD_FINISH,
        totalPage
    })),

    userNotFound: createAction(ActionTypes.USER_NOT_FOUND),

    userCenterLoading: createAction(ActionTypes.USER_CENTER_LOADING),

    userCenterLoaded: createAction(ActionTypes.USER_CENTER_LOADED),

    changeUserInfo: createAction(ActionTypes.CHANGE_USERINFO, (newInfo: Appstate.UserInfo ) => ({
        type: ActionTypes.CHANGE_USERINFO,
        newInfo
    })),

    changeCurrentVisitingUserPage: createAction(ActionTypes.CHANGE_VISITING_USER, (page: 'exact' | 'manage' = 'exact', id: number) => ({
        type: ActionTypes.CHANGE_VISITING_USER,
        page,
        id
    })),
    
    userCenterError: createAction(ActionTypes.USER_CENTER_FETCH_ERROR, (message: string) => ({
        type: ActionTypes.USER_CENTER_FETCH_ERROR,
        message
    })),

    changeUserFavoriteBoards: createAction(ActionTypes.CHANGE_USER_FAVORITE_BOARDS, (boardsInfo: Appstate.UserFavoritesBoardInfo[]) => ({
        type: ActionTypes.CHANGE_USER_FAVORITE_BOARDS,
        boardsInfo
    })),
    
    changeUserRecentPosts: createAction(ActionTypes.CHANGE_USER_RECENT_POSTS, (posts: Appstate.UserRecentPost[]) => ({
        type: ActionTypes.CHANGE_USER_RECENT_POSTS,
        posts
    }))
};

let type = Object.keys(Actions).map(key => Actions[key]);