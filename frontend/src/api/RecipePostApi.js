import Api from "./Api";

class RecipePostApi {

    getAllRecipes() {
        return Api.get("/posts");
    }
    getRecipeById(id) {
        return Api.get("/posts/" + id);
    }
    createRecipe(recipePost) {
        return Api.post("/post", recipePost);
    }
    updateRecipe(id, recipePost) {
        return Api.put(`/posts/${id}`, recipePost);
    }
    deleteRecipe(id) {
        return Api.delete("/posts/" + id);
    }

    createFavoriteRecipes(userId,postId) {
        console.log("Create recipes Api userId,postId " ,userId,postId);
        return Api.post(`/users/${userId}/posts/${postId}`);
    }

    getFavoriteRecipes() {

        return Api.get(`/users/favorites`);
    }

}
export default new RecipePostApi();
