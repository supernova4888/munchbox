package se.munchbox.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.munchbox.auth.AuthService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private AuthService authService;

    /**
     * Get All users.
     * @return all users.
     */
    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    /**
     * Get current user
     * @param email id of the current user.
     * @return current user.
     */
    @GetMapping("/me")
    public User getCurrentUser() {
        String email=authService.getLoggedInUserEmail();
        return userService.findUserByEmail(email);
    }
    /**
     * Get current user
     * @param email id of the current user.
     * @return current user.
     */
    @GetMapping("/{email}")
    public User getUserByMail(@PathVariable String email) {
        return userService.findUserByEmail(email);
    }


}