document.addEventListener("DOMContentLoaded", function () {

    // === WELCOME TEXT ===
    let nama = prompt("Masukkan nama Anda:", "Tubagus Raka");
    if (nama) {
        document.getElementById("welcome-text").innerText =
            `Hi ${nama}, Welcome To Website`;
    }

    // === FORM SUBMIT ===
    const messageForm = document.getElementById("messageForm");

    messageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Ambil data input
        const namaInput = document.getElementById("input-nama").value;
        const tglInput = document.getElementById("input-tgl").value;
        const genderInput = document.querySelector('input[name="gender"]:checked');
        const pesanInput = document.getElementById("input-pesan").value;

        // Isi ke bagian kanan
        document.getElementById("res-nama").innerText = namaInput;
        document.getElementById("res-tgl").innerText = tglInput;
        document.getElementById("res-gender").innerText = genderInput.value;
        document.getElementById("res-pesan").innerText = pesanInput;
    });

    // === LIVE TIME WIB ===
    function updateTime() {
        const now = new Date();

        const options = {
            timeZone: "Asia/Jakarta",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        };

        const formatter = new Intl.DateTimeFormat("id-ID", options);
        document.getElementById("current-time").innerText =
            formatter.format(now) + " WIB";
    }

    updateTime(); // panggil langsung
    setInterval(updateTime, 1000); // update tiap 1 detik
});
