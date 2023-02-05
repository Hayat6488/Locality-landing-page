const firebaseConfig = {
  apiKey: "AIzaSyDrzd_SK_uq7nSjISd9VFkARU7OsctwKPQ",
  authDomain: "locality-tradesmen.firebaseapp.com",
  databaseURL: "https://locality-tradesmen-default-rtdb.firebaseio.com",
  projectId: "locality-tradesmen",
  storageBucket: "locality-tradesmen.appspot.com",
  messagingSenderId: "843068978464",
  appId: "1:843068978464:web:e853b17d34875c801f5345",
  measurementId: "G-S81PHZXMK6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const subscribedUser = db.collection("subscribedUsers");

document
  .getElementById("submit-subscribe")
  .addEventListener("click", function (event) {
    event.preventDefault()
    const name = document.getElementById("your-name").value;
    const email = document.getElementById("your-email").value;
    console.log(name, email);

    const data = {
      name: name,
      email: email,
    };
    try {
        subscribedUser.add(data);
      alert("Subscribed Successfully");
    } catch (error) {
      console.log(error.message);
    }
  });

  const comments = db.collection("contactUs");

document
  .getElementById("submit_contact")
  .addEventListener("click", function (event) {
    event.preventDefault()
    const name = document.getElementById("your-name").value;
    const email = document.getElementById("mail").value;
    const subject = document.getElementById("subject").value;
    const comment = document.getElementById("comment").value;
    console.log(name, email);

    const commentData = {
      name: name,
      email: email,
      subject: subject,
      message: comment
    };
    try {
        comments.add(commentData);
      alert("Comment added Successfully");
    } catch (error) {
      console.log(error.message);
    }
  });
