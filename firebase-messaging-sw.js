importScripts(
 'https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js'
);

importScripts(
 'https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js'
);

firebase.initializeApp({
 apiKey:"AIzaSyALRTOJ0RectT5UFjKh01sTc-Wql9uYSpk",
 authDomain:"second-brain-b63e3.firebaseapp.com",
 projectId:"second-brain-b63e3",
 storageBucket:"second-brain-b63e3.firebasestorage.app",
 messagingSenderId:"568440402215",
 appId:"1:568440402215:web:a2ac2733a541fea7ccf902"
});

const messaging =
 firebase.messaging();

messaging.onBackgroundMessage(
 payload=>{

  self.registration.showNotification(
   payload.notification?.title ||
   "Second Brain",
   {
    body:
    payload.notification?.body || ""
   }
  );

 }
);