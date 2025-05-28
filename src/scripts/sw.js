self.addEventListener('push', (event) => {
  console.log("Service Worker pushing...");

  async function chainPromise() {
    await self.registration.showNotification('Ada laporan baru untuk anda!', {
      body: "Terjadi kerusakan lampu jalan di Jl. Melati"
    })
  }

  event.waitUntil(chainPromise());
})