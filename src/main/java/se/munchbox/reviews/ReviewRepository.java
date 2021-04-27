package se.munchbox.reviews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.munchbox.reviews.Review;


@Repository
    public interface ReviewRepository extends JpaRepository<Review,Long> {
        //List<Comment> findByEmail(String email);
    }


