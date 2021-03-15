export function md5(value) {
    return CryptoJS.MD5(value).toString();
}