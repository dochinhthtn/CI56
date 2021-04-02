import { getDataFromDoc, getDataFromDocs } from "../utils.js";

export async function createConversation() {
    let newConversation = await firebase.firestore().collection('conversations').add({
        messages: [],
        dateModified: new Date().toISOString()
    });

    return newConversation;
}

export async function addMessage(id, message) {
    await firebase.firestore().collection('conversations').doc(id).update({
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    });
}

export async function getConversationUsers(id) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('currentConversation', '==', id)
        .get();

    return getDataFromDocs(response.docs);
}

export function listenConversation(id, callback) {
    firebase.firestore().collection('conversations').doc(id).onSnapshot((snapshot) => {
        let data = getDataFromDoc(snapshot);
        callback(data);
    });
}