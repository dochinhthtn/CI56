import { getDataFromDocs, md5 } from "../utils.js";

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
            password: md5(password),
            status: 'free'
        });

        alert("Register successfully");
    } else {
        alert("This email has been already in used!");
    }
}

export async function login(email, password) {
    let response = await firebase
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .where("password", "==", md5(password))
        .get();

    if(response.empty) {
        alert("Email or password is not correct");
    } else {
        router.navigate('/index');
    }
}

export function getUserInfo() {

}

export function listenUsersStatusChanged(callback) {
    firebase.firestore().collection('users').onSnapshot(function(snapshot) {
        let data = getDataFromDocs(snapshot.docs);
        callback(data);
    });
}


// xử lý bất đồng bộ: callback, promise, async/await
// phương châm: chỗ nào có promise -> có await -> có async