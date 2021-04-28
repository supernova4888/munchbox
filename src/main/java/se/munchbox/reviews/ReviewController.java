package se.munchbox.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.munchbox.ResourceNotFoundException;
import se.munchbox.recipe.RecipePost;
import se.munchbox.recipe.RecipePostRepository;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;

@RestController
public class ReviewController {


    ReviewRepository commentsRepository;
    RecipePostRepository recipePostRepository;

        HashMap<Long, String> commentBysEmailID = new HashMap<>();

        @Autowired
        public ReviewController(ReviewRepository commentsRepository, RecipePostRepository recipePostRepository) {
            this.commentsRepository = commentsRepository;
            this.recipePostRepository = recipePostRepository;
           // this.userRepository = userRepository;
        }

        @PostMapping("/posts/{postsId}/comments")
        public ResponseEntity<Review> createComment(@PathVariable Long postsId, @RequestBody Review comments, Principal principal){
            RecipePost posts = recipePostRepository.findById(postsId).orElseThrow(ResourceNotFoundException::new);
            /*String userName = principal.getName();

            comments.setEmail(userName);
            System.out.println("String 123:" + comments.getEmail());
            comments.setPosts(posts);*/

            commentsRepository.save(comments);
            return ResponseEntity.status(HttpStatus.CREATED).body(comments);
        }

        @DeleteMapping("/comments/{id}")
        public ResponseEntity<Review> deleteComment(@PathVariable Long id, Principal principal){
            Review comments = commentsRepository.findById(id).orElseThrow(ResourceNotFoundException::new);

           // if(comments.getEmail().equalsIgnoreCase(principal.getName())) {
                commentsRepository.delete(comments);
                return ResponseEntity.ok(comments);
           // }
           // else {
                //throw new ResourceNotFoundException();
            }



        @GetMapping("/posts/{postsId}/comments")
        public ResponseEntity<List<Review>>  getAllCommentsToParticularArticle(@PathVariable Long postsId  )  {
            RecipePost posts = recipePostRepository.findById(postsId).orElseThrow(ResourceNotFoundException::new);
            return ResponseEntity.ok( posts.getReviews());
        }



    }




