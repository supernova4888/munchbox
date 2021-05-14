

import ReviewCardSmall from "../../components/ReviewCardSmall";



export default function MySavedRecipesPage(){
   /* const[recipes,setRecipes]= useState([]);
    const [user, setUser] = useState()

    console.log("all recip",recipes)
    console.log("user", user)

    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then(({data}) => setRecipes(data))
            .catch((err) => console.error(err));

        UserApi.getCurrentUser()
            .then(({data}) => setUser(data))
            .catch((err) => console.error(err));
    }, [setRecipes]);
*/

    //console.log("filter",recipes.filter(recipe => recipe.reviews.filter(review => review.userName === user?.name)))

    // for(const recipe of recipes){
    //     let review =  recipe.reviews.filter(review => review.userName === user?.name)
    //     console.log("review", review)
    //
    // }
    //
    //
    // const RecipesArray = recipes.map((recipePost) => (
    //
    //     <ReviewCardSmall key={recipePost.id} recipePost={recipePost}/>
    // ));
    return (

        <div>
            <ReviewCardSmall/>
        </div>
    );

}