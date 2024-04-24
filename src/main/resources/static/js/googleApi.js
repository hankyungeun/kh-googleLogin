const CLIENT_ID='379208856873-m47bj4htv0e10b6creu1rd3hdc6r564o.apps.googleusercontent.com';
const REDIRECT_URL = 'http://localhost:8080/login/oauth/google';

// window.onload = () => {
//   document.querySelector('#btn-glogin').onclick = () => {
//     console.log('btn-glogin클릭')
//     const google_login_url = 'https://accounts.google.com/o/oauth2/v2/auth'
//         + '?client_id=' + CLIENT_ID
//         + '&redirect_uri=' + REDIRECT_URL
//         + '&response_type=code'
//         + '&scope=email profile';
//     location.href = google_login_url;
//   }
// }

function googleLogin(){
  console.log('btn-glogin클릭')
  const google_login_url = 'https://accounts.google.com/o/oauth2/v2/auth'
      + '?client_id=' + CLIENT_ID
      + '&redirect_uri=' + REDIRECT_URL
      + '&response_type=code'
      + '&scope=email profile';
  location.href = google_login_url;
}