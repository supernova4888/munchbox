package se.munchbox.userPref;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userPreferences")
public class UserPreferenceController {
        @Autowired
        private UserPreferenceService userPreferenceService;

        @GetMapping("/userid")
        public List<UserPreference> getAllByUserId(@RequestParam(required = false) Long userId) {
            if (userId == null) {
                return userPreferenceService.getAll( );
            } else {
                return userPreferenceService.getAllByUserId(userId);
            }
        }
        @PostMapping("")
        public UserPreference create(@RequestBody UserPreference newUserPreference){
            return userPreferenceService.create(newUserPreference);
        }

        /*@PostMapping("/user/{userid}/userPreferences")
        public ResponseEntity<UserPreference> createUserPreference(@PathVariable Long userId, @RequestBody UserPreference userPreference){
            UserPreferenceService.createUserPreference(userId, userPreference);
            return ResponseEntity.status(HttpStatus.CREATED).body(userPreference);
        }*/



        @PutMapping("")
        public UserPreference update(@RequestBody UserPreference newUserPreference){
            return userPreferenceService.update(newUserPreference);
        }

        @DeleteMapping("/{id}")
        public void delete(@PathVariable Long id) {
            userPreferenceService.delete(id);
        }

        }





