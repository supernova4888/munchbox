package se.munchbox.reviews;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import se.munchbox.recipe.RecipePost;
import se.munchbox.user.User;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;

@Entity

public class Review {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private String body;

        @Column(nullable = false)
        private int rating;

        @ManyToOne
        @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
        @JsonIdentityReference(alwaysAsId = true)
        @JoinColumn(nullable = false)
        private RecipePost posts;

        @ManyToOne
        @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
        @JsonIdentityReference(alwaysAsId = true)
        @JoinColumn(nullable = false)
        private User user;


        public void setId (Long id) {
            this.id = id;
        }


        public Long getId() {
            return id;
        }


        public String getBody() {
            return body;
        }

        public void setBody(String body) {
            this.body = body;
        }

        public RecipePost getPosts() {
            return posts;
        }

        public void setPosts(RecipePost posts) {
            this.posts = posts;
        }

        public int getRating() {
            return rating;
        }

        public void setRating(int rating) {
            this.rating = rating;
        }

        public User getUser() {
            return user;
        }

        public void setUser(User user) {
            this.user = user;
        }
}


