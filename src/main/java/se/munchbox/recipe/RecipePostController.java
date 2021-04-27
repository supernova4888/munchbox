package se.munchbox.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.munchbox.ResourceNotFoundException;


import java.security.Principal;
import java.util.List;

@RestController
public class RecipePostController {
    RecipePostRepository recipePostRepository;
    @Autowired
    public RecipePostController(RecipePostRepository recipePostRepository) {
        this.recipePostRepository = recipePostRepository;

    }
    @GetMapping("/posts")
    public ResponseEntity<List<RecipePost>> listAllPosts() {
        List<RecipePost> posts = recipePostRepository.findAll();
        return ResponseEntity.ok(posts);
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<RecipePost> updatePost(@PathVariable Long id, @RequestBody RecipePost updatedPost) {
        recipePostRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        updatedPost.setId(id);
        RecipePost posts = recipePostRepository.save(updatedPost);
        return ResponseEntity.ok(updatedPost);
    }


    @DeleteMapping("/posts/{id}")
    public ResponseEntity<RecipePost> deletePost(@PathVariable Long id) {
        RecipePost posts = recipePostRepository.findById(id).orElseThrow(ResourceNotFoundException::new);

        recipePostRepository.delete(posts);
        return new ResponseEntity<RecipePost>(HttpStatus.OK);
    }


    @PostMapping("/post")
    public ResponseEntity<RecipePost> createPost(@RequestBody RecipePost post, Principal principal) {
        String userName = principal.getName();
       // post.setEmail(userName);
        recipePostRepository.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(post);
    }

}





