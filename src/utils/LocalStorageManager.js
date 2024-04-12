export default class LocalStorageManager {
    
    static setUserToken(userToken) {
        process.browser && localStorage.setItem('lsUserToken', JSON.stringify(userToken));
    }

    static removeUserToken() {
        process.browser && localStorage.removeItem('lsUserToken');
    }

    static getUserToken() {
      if(process.browser){
        return JSON.parse(localStorage.getItem('lsUserToken'));
      }
    }
}
