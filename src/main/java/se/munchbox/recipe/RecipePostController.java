package se.munchbox.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.munchbox.ResourceNotFoundException;
import se.munchbox.user.UserRepository;


import java.security.Principal;
import java.util.List;

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

    /**
     * Create a new recipe post
     * @param post New user-created recipe post
     * @param principal User information
     * @return Response created
     */
    @PostMapping("/post")
    public ResponseEntity<RecipePost> createPost(@RequestBody RecipePost post, Principal principal) {
        String userEmail = principal.getName();
        String userName = userRepository.findByEmail(userEmail).getName();
        String profileId = userRepository.findByEmail(userEmail).getProfileId();
        post.setUserName(userName);
        post.setProfileId(profileId);
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

}





