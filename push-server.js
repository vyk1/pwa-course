
// Web-push Module
const webpush = require('web-push');
const vapid = require('./vapid.json');

// Configure keys
webpush.setVapidDetails(
  'mailto:admin@email.com',
  vapid.publicKey,
  vapid.privateKey
);

const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/cldZxQiy4po:APA91bHfAsEnvwrKhdF4E1Ek_KwG7l_xRAxXEFJX1WDsGlMFB9OEONYnh19GBs7I_3RLcp6eemPcJLSvoWLEFzpxmZKJh5A_LdlweLbPXX36UiT4MT_8I8bBoJlPV4Kfxu0P9cn_K2FP',
  keys: {
    auth: 'zQm_SqVjAWXEgkzmDKNmNQ==',
    p256dh: 'BCycPnH5W7FOTuj8u079SBwTRpso_DrS5teX4jNJcdvZxCDOXUj9OfLc1f5y4yJfqJA0b49E9Y0JtLszpHuxQGA='
  }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server');
console.log('Push sent to client');
