package se.munchbox.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.munchbox.ResourceNotFoundException;
import se.munchbox.auth.AuthService;
import se.munchbox.recipe.RecipePost;
import se.munchbox.recipe.RecipePostRepository;
import se.munchbox.user.User;
import se.munchbox.user.UserRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ReviewController {

    RecipePostRepository recipePostRepository;
    ReviewService reviewService;
    UserRepository userRepository;
    AuthService authService;

    @Autowired
    public ReviewController(RecipePostRepository recipePostRepository, ReviewService reviewService, UserRepository userRepository, AuthService authService) {
        this.recipePostRepository = recipePostRepository;
        this.reviewService = reviewService;
        this.userRepository = userRepository;
        this.authService = authService;
    }

    /**
    *Create a review to a specific RecipePost by his ID.
     *
     * @param postId  the id of the post
     * @param review the comment to create
     * @return status of the action
     */
    @PostMapping("/posts/{postId}/reviews")
    public ResponseEntity<Review> createReview(@PathVariable Long postId, @Valid @RequestBody Review review){
        RecipePost recipePost = recipePostRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        String email = authService.getLoggedInUserEmail();
        User user = userRepository.findByEmail(email);
        user.getReviews().add(review);
        review.setUser(user);
        review.setPosts(recipePost);
        return ResponseEntity.status(HttpStatus.CREATED).body(reviewService.createReview(review));
    }

    /**
     * get all reviews related to a specific post by his ID
     *
     * @param postId the id of the post
     * @return all comments related to that post, throw ResourceNotFoundException if post is not found
     */
    @GetMapping("/posts/{postId}/reviews")
    public ResponseEntity<List<Review>> listAllReviews(@PathVariable Long postId) {
        RecipePost recipePost = recipePostRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(recipePost.getReviews());
    }

        @PutMapping("/review/{reviewId}")
    public ResponseEntity<Review> updateComment(@PathVariable Long reviewId, @RequestBody Review updatedReview) {
        Review review = reviewService.updateReview(reviewId, updatedReview);
        return ResponseEntity.ok(review);
    }

}




