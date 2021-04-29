package se.munchbox.userPref;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserPreferenceRepository extends JpaRepository<UserPreference, Long> {

}
