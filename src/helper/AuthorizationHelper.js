import noMusicFound from './ReloadHelper'

export function authorizationHelper(){
    window.close();
}

export const CurrentState = {
    AUTHORIZED: "authorized", //it is already authorized and music is being played
    NOMUSIC: "noMusic", //it is authorized but no music is being played now
    LOGIN: "login", //user just logged in
    UNAUTHORIZED: "unauthorized" //the user hasn't been authorized to spotify api yet
};

export function unauthorizedMessage(){
    alert("Authorize first")
    noMusicFound();

}