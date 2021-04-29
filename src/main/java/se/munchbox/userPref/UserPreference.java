package se.munchbox.userPref;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import javax.persistence.*;

@Entity
public class UserPreference {

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String userPrefBody;

    @Column(nullable = false)
    private String userEmail;
    @Column(nullable = false)
    private String userName;


    public UserPreference(){
    }

    public UserPreference(Long id, String userPrefBody, String userName, String userEmail) {
        this.id = id;
        this.userPrefBody = userPrefBody;
        this.userName = userName;
        this.userEmail = userEmail;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserPrefBody() {
        return userPrefBody;
    }

    public void setUserPrefBody(String userPrefBody) {
        this.userPrefBody = userPrefBody;
    }
}














