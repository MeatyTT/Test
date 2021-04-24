import data from "./data.js"
export function findUserByName(name) {
    let check = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name == name) {
            console.log("Name: " + data[i].name);
            console.log("Gender: " + data[i].gender);
            console.log("Country: " + data[i].country);
            console.log("Phone number: " + data[i].phoneNumber);
            console.log("favorite: " + data[i].favorites);
            check = true;
            break;
        }
    }
    if (check==false) console.log("No user found");
}
export function countUserFromCountry(country) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].country == country) {
            count++;
        }
    }
    if (count == 0) console.log("No user is in this country");
    else console.log("The user in " + country + " is " + count);
}
export function findUserByGenderAndFavorite(gender, favorite) {
    let check = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].gender == gender) {
            if(data[i].favorite==favorite){
                console.log("Name: " + data[i].name);
                console.log("Gender: " + data[i].gender);
                console.log("Country: " + data[i].country);
                console.log("Phone number: " + data[i].phoneNumber);
                console.log("favorite: " + data[i].favorites);
                check = true;
                break;
            }
        }
    }
    if (!check) console.log("No user found");
}
export function sortUserByFavorite() {
    let check = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name == name) {
            console.log("Name: " + data[i].name);
            console.log("Gender: " + data[i].gender);
            console.log("Country: " + data[i].country);
            console.log("Phone number: " + data[i].phoneNumber);
            console.log("favorite: " + data[i].favorites);
            check = true;
            break;
        }
    }
    if (!check) console.log("No user found");
}