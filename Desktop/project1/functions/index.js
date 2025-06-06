/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onCall(async (data, context) => {
  const { to, subject, message } = data;

  // NGワードチェック
  const filePath = path.join(__dirname, 'ng_words.json');
  const ngWords = JSON.parse(fs.readFileSync(filePath, 'utf-8')).ngWords;

  for (let word of ngWords) {
    if (message.includes(word)) {
      throw new functions.https.HttpsError('invalid-argument', `NGワード「${word}」が含まれています`);
    }
  }

  // 設定
  const transporter = nodemailer.createTransport({
    host: 'gmail',
        auth: {
      user: 'fairycards2025@gmail.com',
      pass: 'pfiq kmsn bsbp fmqi'
    }
  });

  const mailOptions = {
    from: 'fairycards2025@gmail.com',
    to,
    subject,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    throw new functions.https.HttpsError('internal', error.message);
  }
});
