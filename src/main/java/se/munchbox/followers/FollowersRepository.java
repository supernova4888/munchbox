package se.munchbox.followers;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowersRepository extends JpaRepository<Followers,Long> {
    List<Followers> findAllByUserId(Long userId);
}
