export function md5(value) {
    return CryptoJS.MD5(value).toString();
}

export function require(value) {
    return value != '';
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// chuyển đổi dữ liệu của document (dạng cloud firestore) => dữ liệu có thể thấy được
export function getDataFromDoc(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}

export function getDataFromDocs(docs) {
    return docs.map((doc) => {
        return getDataFromDoc(doc);
    });
}

