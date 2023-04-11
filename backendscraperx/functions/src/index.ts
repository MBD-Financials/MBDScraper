import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const MBDataShop = functions.https.onRequest((request, response) => {
functions.logger.info("Hello logs!", {structuredData: true});
response.send("Hello from MBDataShop!");
});


// https://ffe9-193-234-101-160.eu.ngrok.io/webscraper-bbef3/us-central1/MBDataShop
//https://dfa6-193-234-101-160.eu.ngrok.io/webscraper-bbef3/us-central1/MBDataShop