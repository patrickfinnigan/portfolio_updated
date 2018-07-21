  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyDKOZwiGFLbdAcRHcHk01Z9w9idvDi-P9s",
      authDomain: "portfolio-contact-demo.firebaseapp.com",
      databaseURL: "https://portfolio-contact-demo.firebaseio.com",
      projectId: "portfolio-contact-demo",
      storageBucket: "portfolio-contact-demo.appspot.com",
      messagingSenderId: "458010882155"
  };
  firebase.initializeApp(config);
  
  const database = firebase.database();

  $("#contactSubmitButton").on("click", () => {
    // event.preventDefault();
    let name = $("#nameEntry").val().trim();
    let email = $("#emailEntry").val().trim();
    let message = $("#messageEntry").val().trim();

    database.ref().push({
        name: name,
        email: email,
        message: message,
    });
  });