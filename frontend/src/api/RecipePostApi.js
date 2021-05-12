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
  CreateFavoriteRecipes() {
      return Api.post("/user/{id}/posts/{id}");
  }
}
export default new RecipePostApi();
