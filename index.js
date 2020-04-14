function localStorageGetItem(key) {
    if (!localStorage) throw "Local storage is not support";
    return localStorage.getItem(key);
}

function localStorageSetItem(key, value) {
    if (!localStorage) throw "Local storage is not support";
    localStorage.setItem(key, value);
}

function generateUUID(key) {
    if (!key) throw "Please pass locals torage key";
    let uuid = localStorageGetItem('user.uid');
    if (!uuid || uuid.length > 37) {
        let d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); // use high-precision timer if available
        }
        uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
        });
        localStorageSetItem('user.uid', uuid);
    }
    return uuid;
}

module.exports = generateUUID
