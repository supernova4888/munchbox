package se.munchbox.recipe;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import se.munchbox.reviews.Review;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Entity
public class RecipePost {



    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private String title;
        @Column(nullable = false)
        private String body;
        /*@Column(nullable = false)
        private String email;*/

        @OneToMany(mappedBy= "posts", cascade = CascadeType.ALL)
        public List<Review> reviews = new ArrayList<>();




        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getBody() {
            return body;
        }

        public void setBody(String body) {
            this.body = body;
        }

        public List<Review> getReviews() {
            return reviews;
        }

        public void setReviews(List<Review> reviews) {
            this.reviews = reviews;
        }

        /*public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }*/

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}


