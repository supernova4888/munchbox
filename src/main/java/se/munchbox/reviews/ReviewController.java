package se.munchbox.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.munchbox.ResourceNotFoundException;
import se.munchbox.recipe.RecipePost;
import se.munchbox.recipe.RecipePostRepository;
import se.munchbox.user.UserRepository;

import javax.validation.Valid;
import java.util.List;
import java.security.Principal;

@RestController
public class ReviewController {

    RecipePostRepository recipePostRepository;
    ReviewService reviewService;
    UserRepository userRepository;

    @Autowired
    public ReviewController(RecipePostRepository recipePostRepository, ReviewService reviewService, UserRepository userRepository) {
        this.recipePostRepository = recipePostRepository;
        this.reviewService = reviewService;
        this.userRepository = userRepository;
    }

    /**
    *Create a review to a specific RecipePost by his ID.
     *
     * @param postId  the id of the post
     * @param review the review to create
     * @return status of the action
     */
    @PostMapping("/posts/{postId}/reviews")
    public ResponseEntity<Review> createReview(@PathVariable Long postId, @Valid @RequestBody Review review,Principal principal){
        RecipePost recipePost = recipePostRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        String userEmail = principal.getName();
        String userName = userRepository.findByEmail(userEmail).getName();
        String profileId = userRepository.findByEmail(userEmail).getProfileId();
        review.setUserName(userName);
        review.setProfileId(profileId);
        review.setPosts(recipePost);
        return ResponseEntity.status(HttpStatus.CREATED).body(reviewService.createReview(review));
    }

    /**
     * get all reviews related to a specific post by his ID
     *
     * @param postId the id of the post
     * @return all reviews related to that post, throw ResourceNotFoundException if post is not found
     */
    @GetMapping("/posts/{postId}/reviews")
    public ResponseEntity<List<Review>> listAllReviews(@PathVariable Long postId) {
        RecipePost recipePost = recipePostRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(recipePost.getReviews());
    }

    /**
     * update a review to a specific review by ID
     *
     * @param reviewId      the id of the review
     * @param updatedReview the new review
     * @return status of the action
     */
        @PutMapping("/review/{reviewId}")
    public ResponseEntity<Review> updateReview(@PathVariable Long reviewId, @RequestBody Review updatedReview) {
        Review review = reviewService.updateReview(reviewId, updatedReview);
        return ResponseEntity.ok(review);
    }

    /**
     * deleting a review by ID
     *
     * @param reviewId the id of the review
     */
    @DeleteMapping("/review/{reviewId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteReview(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewId);
    }


}




