 const form = document.querySelector("form");
    const output = document.getElementById("output");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        // Ambil data input
        const nama = document.querySelector('input[type="text"]').value;
        const alamat = document.querySelector("textarea").value;
        const tempatLahir = document.querySelectorAll('input[type="text"]')[1].value;
        const tanggal = document.querySelector('input[type="date"]').value;
        const nomor = document.querySelector('input[type="tel"]').value;
        const email = document.querySelector('input[type="email"]').value;

        // Notifikasi
        alert("Data berhasil dikirim!");

        // Tampilkan data
        output.innerHTML = `
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Alamat:</strong> ${alamat}</p>
            <p><strong>Tempat Lahir:</strong> ${tempatLahir}</p>
            <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
            <p><strong>Nomor HP:</strong> ${nomor}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
    });