package se.munchbox.userPref;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.munchbox.ResourceNotFoundException;
import se.munchbox.user.UserRepository;
import java.security.Principal;


    @RestController
    public class UserPreferenceController {
         UserPreferenceRepository userPreferenceRepository;
         UserRepository userRepository;

    @Autowired
    public UserPreferenceController(UserPreferenceRepository userPreferenceRepository, UserRepository userRepository)
     {
        this.userPreferenceRepository = userPreferenceRepository;
        this.userRepository = userRepository;
    }

    public UserPreferenceController(){
    }

        @GetMapping("userPreference/{id}")
        public ResponseEntity<UserPreference> getByUserId(@PathVariable Long id){
        UserPreference userPreference = userPreferenceRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(userPreference);
        }

        @PutMapping("userPreference/{id}")
        public ResponseEntity<UserPreference> updateUserPreference(@PathVariable Long id,@RequestBody UserPreference updatedUserPreference){
           userPreferenceRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
           updatedUserPreference.setId(id);
           UserPreference userPreference = userPreferenceRepository.save(updatedUserPreference);
            return ResponseEntity.ok(updatedUserPreference);
        }

        @DeleteMapping("userPreference/{id}")
        public ResponseEntity<UserPreference> deleteUserPreference(@PathVariable Long id) {
            UserPreference userPreference = userPreferenceRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
            userPreferenceRepository.delete(userPreference);
            return new ResponseEntity<UserPreference>(HttpStatus.OK);
        }

          @PostMapping("/userPreference")
          public ResponseEntity<UserPreference> createUserPreference(@RequestBody UserPreference userPreference,Principal principal){
              String userEmail = principal.getName( );
              userPreference.setUserEmail(userEmail);
              String userName = userRepository.findByEmail(userEmail).getName();
              userPreference.setUserName(userName);
              userPreferenceRepository.save(userPreference);
              return ResponseEntity.status(HttpStatus.CREATED).body(userPreference);
          }
        }





