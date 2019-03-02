// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDk0j5iBIg3fBNbrD48dNBEouluyTKYk1I",
//   authDomain: "ixmati-8f134.firebaseapp.com",
//   databaseURL: "https://ixmati-8f134.firebaseio.com",
//   projectId: "ixmati-8f134",
//   storageBucket: "ixmati-8f134.appspot.com",
//   messagingSenderId: "416074289583"
// };
// firebase.initializeApp(config);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });