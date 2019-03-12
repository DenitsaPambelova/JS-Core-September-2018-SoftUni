const memeModel = (function () {

    function getAllMemes() {
        return remote.get('appdata', 'memes', 'Kinvey');
    }

    function create(data) {
        return remote.post('appdata', 'memes', 'Kinvey', data);
    }

    function getById(id) {
        const endpoint = `memes/${id}`;
        return remote.get('appdata', endpoint, 'Kinvey');
    }

    function edit(id, data) {
        const endpoint = `memes/${id}`;
        return remote.update('appdata', endpoint, 'Kinvey', data);
    }

    function remove(id) {
        const endpoint = `memes/${id}`;
        return remote.remove('appdata', endpoint, 'Kinvey');
    }

    function getAllMemesByCreator(username) {
        const endpoint = `memes/?query={"creator":"${username}"}`;
        return remote.get('appdata', endpoint, 'Kinvey');
    }

    return {
        getAllMemes,
        create,
        getById,
        edit,
        remove,
        getAllMemesByCreator
    }
})();