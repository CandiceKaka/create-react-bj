import qs from 'qs';

export default option => {
  const {
    url,
    post,
    body,
    token,
    credentials,
    commonToken,
    delete_,
    Authorization,
    contentType,
    file,
    put_
  } = option;

  let method = post ? 'POST' : delete_ ? 'DELETE' : put_ ? 'PUT' : 'GET';

  const fetchopt =
    method == 'GET'
      ? {
          method: 'GET',
          headers: {
            // 'token': token ? token : COMMONTOKEN,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          credentials: credentials ? credentials : 'include',
        }
      : {
          method: method,
          headers: {
            // 'token': token ? token : COMMONTOKEN,
            Accept: 'application/json',
            'Content-Type': contentType? contentType: 'application/x-www-form-urlencoded',
          },
          body: qs.stringify(body),
          credentials: credentials ? credentials : 'include'
        };
  const fetch_promise = fetch(url, fetchopt)
    .then(response => {
      if (response.status == 302||response.status == 401) {
        // const fromMobile=navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
        console.log('状态码',response.status)
      } else {
        return response.status == 200? file ? response : response.json(): '请求失败';
      }
    })
    .catch(err => {
      console.log(err);
    });
  const abort_promise = new Promise(function(resolve, reject) {
      setTimeout(()=>{
        reject('timeout');//请求20秒超时
      },20000)
  });
  const fetch_change = Promise.race([abort_promise, fetch_promise]).catch(
    error=>{
      if(error=='timeout'){
        const fromMobile=navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
        console.log('请求超时')
      }
    }
  );
  // return fetch_promise;
  return fetch_change;
};
