
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
// if (navigator.serviceWorker) {
  // Register the SW
  // navigator.serviceWorker.register('/sw.js').then(function(registration){
  // }).catch(console.log);
// }

// Notification Support
if (window.Notification) {

  function showNotification() {

    let notificationOpts = {
      body: 'Some notification information.',
      icon: '/icon.png'
    }

    let n = new Notification('My new Notification.', notificationOpts);

    n.onclick = () => {
      console.log('Notification Clicked');
    }
  }

  // Manage permission
  if (Notification.permission === 'granted') {
    showNotification();

  } else if (Notification.permission !== 'denied') {

    Notification.requestPermission( (permission) => {

      if (permission === 'granted') {
        showNotification();
      }
    });

  }
}
