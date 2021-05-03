// user Preference

// import imgs

// create imgs for person to select - user clicks "I eat all" > save that in variable ("user pref") > POST to back end endpoint > choice persists in the FE for the user (recoil).
// user can only select one image

// variable userPref is a set of predefined string 
import { atom } from "recoil";

export const userPrefState = atom ({
    key: "userPrefState",
    default: "I eat all",
});
