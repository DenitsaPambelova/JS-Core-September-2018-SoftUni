const storage = function () {
    const appKey='kid_B10AwP6JV';

    const  saveData=function (key,value) {
        localStorage.setItem(appKey+key,JSON.stringify(value));
    };

    const getData=function (key) {
        return JSON.parse(localStorage.getItem(appKey+key));
    };

    const deleteData=function (key) {
        localStorage.removeItem(appKey+key);
    };
    return{
        saveData,
        getData,
        deleteData,
        appKey
    }
}();