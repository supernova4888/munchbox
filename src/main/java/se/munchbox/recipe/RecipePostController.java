package se.munchbox.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.munchbox.ResourceNotFoundException;
import se.munchbox.user.UserRepository;
 import se.munchbox.user.User;
import se.munchbox.recipe.RecipePost;



import java.security.Principal;
import java.util.List;
import java.util.Set;

@RestController
public class RecipePostController {
    RecipePostRepository recipePostRepository;
    UserRepository userRepository;

    @Autowired
    public RecipePostController(RecipePostRepository recipePostRepository, UserRepository userRepository) {
        this.recipePostRepository = recipePostRepository;
        this.userRepository = userRepository;

    }

    /**
     * List all recipe posts in database
     * @return Response OK
     */
    @GetMapping("/posts")
    public ResponseEntity<List<RecipePost>> listAllPosts() {
        List<RecipePost> posts = recipePostRepository.findAll();
        return ResponseEntity.ok(posts);
    }

    /**
     * Update a specific recipe post
     * @param id The id of the post to be updated
     * @param updatedPost New user-created recipe post to update the old
     * @return Response OK
     */
    @PutMapping("/posts/{id}")
    public ResponseEntity<RecipePost> updatePost(@PathVariable Long id, @RequestBody RecipePost updatedPost) {
        recipePostRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        updatedPost.setId(id);
        RecipePost posts = recipePostRepository.save(updatedPost);
        return ResponseEntity.ok(updatedPost);
    }

    /**
     * Delete a specific recipe post
     * @param id The id of the post to be deleted
     * @return Response OK
     */
    @DeleteMapping("/posts/{id}")
    public ResponseEntity<RecipePost> deletePost(@PathVariable Long id) {
        RecipePost posts = recipePostRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        recipePostRepository.delete(posts);
        return new ResponseEntity<RecipePost>(HttpStatus.OK);
    }

    @PostMapping("/users/{userId}/posts/{postId}")
    public ResponseEntity<RecipePost> favoritisePost(@PathVariable Long userId, @PathVariable Long postId) {
        User user = userRepository.findById(userId).get(); // orElseThrow
        RecipePost post = recipePostRepository.findById(postId).get();

        Set<User> users = post.getFavoritedUsers();
        users.add(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(recipePostRepository.save(post));
    }

    /**
     * Create a new recipe post
     * @param post New user-created recipe post
     * @param principal User information
     * @return Response created
     */
    @PostMapping("/post")
    public ResponseEntity<RecipePost> createPost(@RequestBody RecipePost post, Principal principal) {
        post.setUser(userRepository.findByEmail(principal.getName()));

        /*String userEmail = principal.getName();
        String userName = userRepository.findByEmail(userEmail).getName();
        String profileId = userRepository.findByEmail(userEmail).getProfileId();
        post.setUserName(userName);
        post.setProfileId(profileId);*/
        recipePostRepository.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(post);
    }

    /**
     * Get one recipe post by id
     * @param id The id of the recipe post to get
     * @return Response OK
     */
    @GetMapping("/posts/{id}")
    public ResponseEntity<RecipePost> getPostById(@PathVariable Long id) {
        RecipePost post = recipePostRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(post);
    }
    /*@GetMapping("/post/{userId}")
    public ResponseEntity<List<RecipePost>> listAllRecipes(@PathVariable Long userId) {
        User user = userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(user.getRecipes());
    }*/
}





