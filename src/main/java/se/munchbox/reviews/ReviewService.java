package se.munchbox.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.munchbox.ResourceNotFoundException;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review createReview(Review newReview){
        return reviewRepository.save(newReview);
    }

    public Review updateReview(Long id, Review updatedReview) {
        Review review = reviewRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        updatedReview.setPosts(review.getPosts());
        updatedReview.setId(id);
        return  reviewRepository.save(updatedReview);
    }

    public void deleteReview(Long id) {
        Review review = reviewRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        reviewRepository.delete(review);
    }
}
