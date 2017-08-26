// from https://web-und-die-welt.de/web/authentifizierung-vue-app/

// import { API_ENDPOINT } from '@/constants/api.js'

hello.init({
  // facebook: FACEBOOK_CLIENT_ID,
  // windows: WINDOWS_CLIENT_ID,
  // google:  'AIzaSyAPgAkZ7_xKEiM4kEErtN6zWVt-XKL30uI'
  google: '785009904705-65k7sf0dk54uetqs90p7gvn59on8288u.apps.googleusercontent.com',
}, {
  redirect_uri: 'redirect.html',
  scope: 'email',
  force: true // not clear what it does (insist on scope?)
});

export default {

  // authentication status
  authenticated () {
    // from https://adodson.com/hello.js/#hellogetauthresponse
    var currentTime = (new Date()).getTime() / 1000;
    var session = hello('google').getAuthResponse();
    console.log('session:', session);
    return session && session.access_token && session.expires > currentTime;
  },

  getToken () {
    hello('google').api('/me').then(function (user) {
      // there is at least user.name and user.thumbnail

      // Save the social token
      socialToken = auth.authResponse.access_token;
      console.log('socialToken', socialToken);
     })
     .catch(function (error) {
       console.log(error)
     });
  },

  // Send a request to the login URL and save the returned JWT
  login (redirect) {
    hello.login('google', {}, function() {
     // Redirect to a specified route
     if (redirect) {
       router.go(redirect);
     }
    });
  },

  // To log out
  logout: function () {
    hello('google').logout().then(function() {
  	   router.go('/');
    }, function(e) {
       console.log('Signed out error: ', e.error.message);
  	   alert('Signed out error: ' + e.error.message);
    });
 }
}
