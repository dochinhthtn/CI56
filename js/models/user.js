import { md5 } from "../utils.js";

export async function register(name, email, password) {
    let response = await firebase
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .get();

    console.log(response);

    if (response.empty) {
        await firebase.firestore().collection("users").add({
            name: name,
            email: email,
            password: md5(password)
        });

        alert("Register successfully");
    } else {
        alert("This email has been already in used!");
    }
}

export function login() {

}

export function getUserInfo() {

}

// xử lý bất đồng bộ: callback, promise, async/await
// phương châm: chỗ nào có promise -> có await -> có async