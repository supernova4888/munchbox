import Api from "./Api";
class RecipePostApi{
    getAllPosts() {
        return Api.get('/posts');
    }
    createPost(post) {
        return Api.post('/post', post);
    }
    updatePost(post) {
        return Api.put('/posts', post);
    }

    deletePost(id) {
        return Api.delete('/posts/'+id);
    }

}