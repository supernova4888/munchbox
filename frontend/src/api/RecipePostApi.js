import Api from "./Api";
class RecipePostApi {
    getAllRecipes() {
        return Api.get("/posts");
    }
    getRecipeById(id) {
        return Api.get("/posts/" + id);
    }
    createRecipe(post) {
        return Api.get("/post", post);
    }


}
export default new RecipePostApi();