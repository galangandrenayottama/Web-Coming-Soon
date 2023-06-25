// Menghitung waktu tersisa untuk countdown
function countdown() {
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1); // Tambah 1 bulan ke tanggal sekarang

    const interval = setInterval(() => {
        const startDate = new Date();
        const remainingTime = endDate - startDate;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

        if (remainingTime < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

countdown();
