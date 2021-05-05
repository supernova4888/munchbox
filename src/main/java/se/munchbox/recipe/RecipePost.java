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

        // the body will hold the recipe URL
        @Column(nullable = false)
        private String body;
        @Column(nullable = false)
        private String UserName;
        @Column(nullable = false)
        private String imgURL;
        @Column(nullable = false)
        private String mainIngredient;

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    public String getMainIngredient() {
        return mainIngredient;
    }

    public void setMainIngredient(String mainIngredient) {
        this.mainIngredient = mainIngredient;
    }

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

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public List<Review> getReviews() {
            return reviews;
        }

    public void setReviews(List<Review> reviews) {
            this.reviews = reviews;
        }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}


