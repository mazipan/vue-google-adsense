if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/vue-google-adsense/sw.js')
      .then(registration => {})
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
