import Api from "./Api";

class AuthApi {
    authenticate({email, password}) {
        return Api.post('/authenticate', {email, password});
    }

    register ({name, email, password, profileId}) {
        return Api.post('/register', {name, email, password, profileId});
    }
}

export default new AuthApi();