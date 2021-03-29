import { getDataFromDocs, md5, getDataFromDoc } from "../utils.js";

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

    if (response.empty) {
        alert("Email or password is not correct");
    } else {
        let userId = response.docs[0].id;
        let token = generateToken(userId);

        localStorage.setItem("token", token);
        await updateUser(userId, { token: token });

        router.navigate('/index');
    }
}

export async function updateUser(id, data) {
    await firebase.firestore().collection('users').doc(id).update(data);
}

export async function getUserByToken(token) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('token', '==', token)
        .get();

    if (response.empty) {
        throw new Error("User's not exist");
    }

    return getDataFromDoc(response.docs[0]);
}

export function generateToken(id) {
    return md5(Date.now() + id);
}

export async function listenCurrentUser(callback) {
    let currentUser = await getCurrentUser();
    firebase.firestore().collection('users').doc(currentUser.id).onSnapshot(function (snapshot) {
        let user = getDataFromDoc(snapshot);
        callback(user);
    });
}

export async function getCurrentUser() {
    let token = localStorage.getItem('token');
    let currentUser = await getUserByToken(token);
    return currentUser;
}

export function listenUsersStatusChanged(callback) {
    firebase.firestore().collection('users').onSnapshot(function (snapshot) {
        let data = getDataFromDocs(snapshot.docs);
        callback(data);
    });
}

export async function getFlirtingUsers() {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('status', '==', 'flirting')
        .get();

    return getDataFromDocs(response.docs);
}


// xử lý bất đồng bộ: callback, promise, async/await
// phương châm: chỗ nào có promise -> có await -> có async