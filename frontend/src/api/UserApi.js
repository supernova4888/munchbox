import Api from "./Api";
class UserApi {
getAllUsers() {
    return Api.get("/users");
}
getUserByMail(email) {
    return Api.get("/users" + email);
}
}
export default new UserApi();
