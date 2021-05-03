package se.munchbox.followers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.munchbox.ResourceNotFoundException;
import se.munchbox.reviews.Review;
import se.munchbox.user.User;
import se.munchbox.user.UserRepository;
import se.munchbox.user.UserService;
import se.munchbox.userPref.UserPreference;

import java.util.List;

@RestController
public class FollowersController {

    @Autowired
    private FollowersRepository followersRepository;
    private FollowersService followersService;
    private UserRepository userRepository;
    private UserService userService;


    public FollowersController(FollowersRepository followersRepository, FollowersService followersService, UserRepository userRepository, UserService userService) {
        this.followersRepository = followersRepository;
        this.followersService = followersService;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/follow/{userId}")
    public ResponseEntity<Followers> createFollower(@PathVariable Long userId, @RequestBody Followers followers) {
        User userRepo = userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);

        followers.setUser(userRepo);

        followersRepository.save(followers);

        return ResponseEntity.status(HttpStatus.CREATED).body(followers);
    }

    @GetMapping("/follow/{userId}")
    public ResponseEntity<List<Followers>> listAllFollowers(@PathVariable Long userId) {
        User user = userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(user.getFollowers());
    }

    @DeleteMapping("follow/{id}")
    public ResponseEntity<Followers> deleteFollower(@PathVariable Long id) {
        Followers followers = followersRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        followersRepository.delete(followers);
        return new ResponseEntity<Followers>(HttpStatus.OK);
    }
}
