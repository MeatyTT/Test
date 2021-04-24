import UserContainer from "./user.js";
import UserList from "./userList.js"
import data from "./data.js";
import { findUserByName, countUserFromCountry, findUserByGenderAndFavorite, sortUserByFavorite } from "./function.js";
let $userList = document.getElementById('my-list');
$userList.setAttribute('user',JSON.stringify(data));
findUserByName("ba");
countUserFromCountry("Vietnam")
findUserByGenderAndFavorite("male","film")



