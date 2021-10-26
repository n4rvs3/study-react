import firebase from "../config/firebase";

const snsAuth = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            return res.user
        })
        .catch((er) => {
            return er;
        })
};

export default snsAuth;