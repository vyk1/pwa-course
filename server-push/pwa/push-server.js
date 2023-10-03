
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
  endpoint: 'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABlHG3pBzhNvR0647iiP9PCQjD9b45Yj79gKRa_AR7LmRjGCSenw7OZJ03HcqxxA2qYP-k6tpyw78Y4wHoLptsFoDyzNfjb1xX_yj-T002OG2mCax8-ZnhUF063LLAUZ8HVSpwiWtigThRSP0Kb7lDF999xWGWI3VnFPARiGOO7gHVPdCY',
  keys: {
    auth: '-4JaXdpqmFAQu6P4fScUSg',
    p256dh: 'BMbt9kKtlbwctngA2pYAVokCDeW1OjpyRPXGibwbv9LFR0lAK85eVWd0-jRTtLIoxiwICZPlgJ2CMWlIp-h2Tw0'
  }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server');
console.log('Push sent to client');
