package se.munchbox.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import se.munchbox.recipe.RecipePostRepository;
import se.munchbox.recipe.RecipePost;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private RecipePostRepository recipePostRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void register(User user) {
        String encryptedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        userRepository.save(user);
    }

    public List<RecipePost> getAllRecipesByUserId(Long id){
        User user = userRepository.findById(id).get();
        List<RecipePost> recipies = user.getPosts();
        return recipies;
        //recipeIds = user.getPosts();
       // list<RecipePost> recipies = findByInventoryIdIn(listOfIds)

       // return recipePostRepository.findByInventoryIdIn(userRepository.findById(id).get().getFavoritePostsIDs());
    }

}