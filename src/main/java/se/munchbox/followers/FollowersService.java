package se.munchbox.followers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowersService {

    @Autowired
    private FollowersRepository followersRepository;

    public List<Followers> getAll() {
        return followersRepository.findAll();
    }

    public List<Followers> getAllByUserId(Long userId) {
        return followersRepository.findAllByUserId(userId);
    }

    public Followers create(Followers followers) {
        return followersRepository.save(followers);
    }
}
