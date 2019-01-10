if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/vue-google-adsense/sw.js').then(registration => {
      console.log('SW registered: ', registration)
      registration.pushManager.subscribe({ userVisibleOnly: true })
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}
