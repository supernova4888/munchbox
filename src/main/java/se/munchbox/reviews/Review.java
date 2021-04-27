package se.munchbox.reviews;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import se.munchbox.recipe.RecipePost;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")

public class Review {




        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private String body;
        @Column(nullable = false)
        private String email;

        @ManyToOne
        @JsonIdentityReference(alwaysAsId = true)
        @JoinColumn(nullable = false)
        private RecipePost posts;





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

        /*public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }*/
    }


