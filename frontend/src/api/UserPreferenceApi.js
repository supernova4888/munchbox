import Api from "./Api";

class UserPreferenceApi {
    getByUserId(id){
        return Api.get('/userPreference/'+id);
    }
    updateUserPreference(id){
        return Api.put('/userPreference/'+id);
    }
    deleteUserPreference(id){
        return Api.delete('/userPreference/'+id);
    }
    createUserPreference(userPreference){
        return Api.post('/userPreference/', userPreference);
    }
}

export default new UserPreferenceApi();