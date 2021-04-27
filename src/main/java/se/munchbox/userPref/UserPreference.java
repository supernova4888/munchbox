package se.munchbox.userPref;


import se.munchbox.user.User;

import javax.persistence.*;

@Entity
public class UserPreference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String userPrefBody;
    @Column(columnDefinition = "TEXT")
    private String userPrefTitle;

    @OneToOne
    private User user;

    public UserPreference(Long id, String userPrefBody, String userPrefTitle, User user) {
        this.id = id;
        this.userPrefBody = userPrefBody;
        this.userPrefTitle = userPrefTitle;
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public String getUserPrefTitle() {
        return userPrefTitle;
    }

    public void setUserPrefTitle(String userPrefTitle) {
        this.userPrefTitle = userPrefTitle;
    }
}














