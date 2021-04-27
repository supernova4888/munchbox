package se.munchbox.recipe;

import org.springframework.data.jpa.repository.JpaRepository;
import se.munchbox.recipe.RecipePost;

public interface RecipePostRepository extends JpaRepository<RecipePost, Long> {

}
