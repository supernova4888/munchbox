import Api from "./Api";
class RecipePostApi{
    getAllPosts() {
        return Api.get('/posts');
    }
}