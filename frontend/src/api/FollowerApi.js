import Api from "./Api";

class FollowerApi{

    listAllFollowers(id){
        return Api.get("/follow/" + id);
    }
    createFollower(id, followers){
        return Api.post("/follow/" + id, followers);
    }
    deleteFollower(id){
        return Api.delete("/follow/" + id);
    }
}

export default new FollowerApi();