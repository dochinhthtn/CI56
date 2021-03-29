export async function createConversation() {
    let newConversation = await firebase.firestore().collection('conversations').add({
        messages: [],
        dateModified: new Date().toISOString()
    });

    return newConversation;
}

export async function addMessage(id, message) {
    await firebase.firestore().collection('conversations').doc(id).update({
        messages: firebase.firestore.FieldValue.ArrayUnion(message)
    });
}