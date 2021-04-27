package se.munchbox.userPref;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.munchbox.user.UserRepository;

import java.util.List;

@Service
public class UserPreferenceService {

    @Autowired
    private UserPreferenceRepository repo;


    public List<UserPreference> getAll() {
        return repo.findAll();
    }

    public List<UserPreference> getAllByUserId(Long userId) {
        return repo.findAllByUserId(userId);
    }

    public UserPreference create(UserPreference newUserPreference){
        return repo.save(newUserPreference);
    }


    public UserPreference update(UserPreference updatedUserPreference){
        return repo.save(updatedUserPreference);
    }

    public void delete(Long id){
        repo.deleteById(id);
    }

}

