export default class SessionStorageManager {
  static setUserToken(userToken) {
      process.browser && sessionStorage.setItem('localStorageUserToken', JSON.stringify(userToken));
  }

  static removeUserToken() {
      process.browser && sessionStorage.removeItem('localStorageUserToken');
  }

  static getUserToken() {
    if(process.browser){
      return JSON.parse(sessionStorage.getItem('localStorageUserToken'));
    }
  }
  
}
