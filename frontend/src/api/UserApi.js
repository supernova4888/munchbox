import Api from "./Api";
class UserApi {
getAllUsers() {
    return Api.get("/users");
}
getUserByMail(email) {
    return Api.get("/users" + email);
}
getCurrentUser(){
    return Api.get("/users/me");
}

}
export default new UserApi();
