var provider = new firebase.auth.GoogleAuthProvider();

const btnFb = document.getElementById('btnFb');
const btnGg = document.getElementById('btnGg');

btnFb.addEventListener('click', () => {
    alert('facebook')
    loginF()
})


btnGg.addEventListener('click', () => {
    alert('google')
    loginG()
})

const loginG = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

const loginF = () => {
    alert('hola facebook')
}