self.addEventListener('push', (event) => {
  console.log("Service Worker pushing...");

  async function chainPromise() {
    const data = await event.data.json();
    console.log("Push data:", data);
    
    await self.registration.showNotification(data.title, {
      body: data.options.body
    })


  }

  event.waitUntil(chainPromise());
})