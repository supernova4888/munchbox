import Api from "./Api";
class RecipePostApi{
    getAllPosts() {
        return Api.get('/posts');
    }
    createPost(post) {
        return Api.post('/post', post);
    }

}