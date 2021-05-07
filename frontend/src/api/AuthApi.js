import Api from "./Api";

class AuthApi {
    authenticate({email, password}) {
        return Api.post('/authenticate', {email, password});
    }

    register ({name, email, password, profileId, foodId}) {
        return Api.post('/register', {name, email, password, profileId, foodId});
    }
}

export default new AuthApi();