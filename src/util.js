function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

function clearUserData() {
    localStorage.removeItem('userData');
}

function createSubmitHandler(callback, ...fields) {
    return function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = fields.reduce((a, c) => Object.assign(a, { [c]: formData.get(c).trim()}), {});

        callback(data, e);
    };
}

export {
    getUserData,
    setUserData,
    clearUserData,
    createSubmitHandler
};