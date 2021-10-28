var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

// Method for checking if local storage is available
function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

if(lsTest() === true){
    // available
}else{
    // unavailable
}

// Learn more about PERSISTING DATA/ SERVICE WORKERS
// Use this method to store history of Client's quotations

// Local Storage Guide:
// https://blog.logrocket.com/localstorage-javascript-complete-guide/
// https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f


const storeToLocalData = async (url, sheetTab) => {
    const localData = localStorage.getItem(sheetTab);

    if (!localData) {
        console.log(`${sheetTab} is not found in Local Storage: Fetching Data From Data Database Now!`);
        await fetch(url)
            .then((response) => response.json())
            .then(res => localStorage.setItem(sheetTab, JSON.stringify(res)));
    } else {
        console.log(`${sheetTab} Exists in Local Storage!`)
    }
}