package se.munchbox.user;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.validator.constraints.Length;
import se.munchbox.followers.Followers;
import se.munchbox.reviews.*;
import se.munchbox.userPref.UserPreference;
import se.munchbox.recipe.RecipePost;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="account")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;

    @Length(min = 5, max=100, message = "Password length must be between 5-100 characters")
    @Column(name = "password")
    private String password;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Followers> followers = new ArrayList<>();

    @ManyToMany(mappedBy = "favoritedUsers", cascade = CascadeType.ALL)

    private Set<RecipePost> favoritedPosts = new HashSet<>();

    @OneToMany(mappedBy= "user", cascade = CascadeType.ALL)
    public List<RecipePost> posts = new ArrayList<>();
    @Column
    private String profileId;

    @Column
    private String foodId;

    public User() {}

    public User(@Email(message = "Invalid email address! Please provide a valid email address") @NotEmpty(message = "Please provide an email address") String email, @Length(min = 5, max = 100, message = "Password length most be between 5-100 characters") String password, @Length(min = 3, max = 100, message = "Name must be between 3-100 characters") String name) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.profileId = profileId;
        this.foodId = foodId;
        this.posts=posts;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Followers> getFollowers() {
        return followers;
    }

    public void setFollowers(List<Followers> followers) {
        this.followers = followers;
    }

    public String getProfileId() {
        return profileId;
    }

    public void setProfileId(String profileId) {
        this.profileId = profileId;
    }

    public String getFoodId() {
        return foodId;
    }

    public void setFoodId(String foodId) {
        this.foodId = foodId;
    }

    public List<RecipePost> getPosts() {
        return posts;
    }

    public Set<RecipePost> getFavoritedPosts() {
        return favoritedPosts;
    }

    public void addFavoritedPost(RecipePost post) {
        this.favoritedPosts.add(post);
    }

    public void setFavoritedPosts(Set<RecipePost> favoritedPosts) {
        this.favoritedPosts = favoritedPosts;
    }

    public void setPosts(List<RecipePost> posts) {
        this.posts = posts;
    }
}