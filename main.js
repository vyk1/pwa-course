
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {
  console.log('SW supported');

  // Convert key to Uint8Array
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  // Register the SW
  navigator.serviceWorker.register('./sw.js').then((registration) => {

    // Server public key
    let pubKey = 'BIjavBdObE38JV9mUJ-07dTCqualeQ2Zuwy63b-d06SyHvagwBRZ27ckbVbFI3Tpxr6K7kGJud2RKp-UfL8iOpg';

    registration.pushManager.getSubscription().then((sub) => {

      // If subscription found, return
      if (sub) return sub;

      let applicationServerKey = urlBase64ToUint8Array(pubKey);

      // Subscribe
      return registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey});

    }).then( sub => sub.toJSON() )
      .then(console.log)
      .catch(console.log);

  }).catch(console.log);

}else{
  console.log('SW not supported', navigator);
}