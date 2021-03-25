let daftarBuku = [
    {
        id: 0,
        judul: 'Inestable',
        kategori: 'Novel',
        cover: 'Inestable.jpg',
        harga: 65000,
        stok: 10
    },
    {
        id: 1,
        judul: 'Detektif Conan',
        kategori: 'Komik',
        cover: 'detektifconan.jpg',
        harga: 18000,
        stok: 10
    },
    {
        id: 2,
        judul: 'Demon Slayer',
        kategori: 'Komik',
        cover: 'demonslayer.jpg',
        harga: 20000,
        stok: 10
    },
    {
        id: 3,
        judul: 'Bukan Cinderella',
        kategori: 'Novel',
        cover: 'bukancinderella.jpg',
        harga: 85000,
        stok: 10
    },
    {
        id: 4,
        judul: 'Fragmen Sejarah Intelektual',
        kategori: 'Sejarah',
        cover: 'Fragmen_Sejarah_Intelektual.jpg',
        harga: 160000,
        stok: 10
    },
    {
        id: 5,
        judul: 'Sultan Mahmud Badaruddin II',
        kategori: 'Sejarah',
        cover: 'sultanmahmud.jpg',
        harga: 90000,
        stok: 10
    },
    {
        id: 6,
        judul: 'Mahir Statistik Multivariat dengan SPSS',
        kategori: 'Teknologi',
        cover: 'spss.jpg',
        harga: 90000,
        stok: 10
    },
    {
        id: 7,
        judul: 'Prinsip-Prinsip Lembaga Keuangan Syariah',
        kategori: 'Finansial',
        cover: 'Prinsip-Prinsip-Lembaga-Keuangan-Syariah.jpg',
        harga: 181000,
        stok: 10
    },
    {
        id: 8,
        judul: 'Memahami Supervisi Audit Intern Bank',
        kategori: 'Finansial',
        cover: 'AuditInternBank.jpg',
        harga: 85000,
        stok: 10
    },
    {
        id: 9,
        judul: 'Dinamika Sejarah Hukum Dari Filosofi Hingga Profesi Hukum',
        kategori: 'Hukum',
        cover: 'sejarahhukum.jpg',
        harga: 47000,
        stok: 10
    },
    {
        id: 10,
        judul: 'Filsafat Hukum Pancasila&Semiotika Hukum Pancasila',
        kategori: 'Hukum',
        cover: 'filsafathukum.jpg',
        harga: 140000,
        stok: 10
    }
]

function ShowListBuku(arrBuku){
    // let lsInfoUser = document.createElement("ul");
    // lsInfoUser.setAttribute("id", "info-user");
    // lsInfoUser.setAttribute("style", "list-style-type:none;");               
    // console.log(document.getElementsByClassName('box col-1-3')[0])
    // document.getElementsByClassName('box col-1-3')[0].appendChild(lsInfoUser);
    for (let i = 0; i < arrBuku.length; i++) {
        const valBuku = arrBuku[i];
        let boxBuku = document.createElement("div")
        boxBuku.setAttribute("class", "buku")
        document.getElementById('content').appendChild(boxBuku)
        let judul = document.createElement("h1")
        judul.innerHTML = valBuku.judul;
        document.getElementsByClassName("buku")[i].appendChild(judul)
        let cover = document.createElement("img")
        cover.setAttribute("src", `assets/${valBuku.cover}`)
        document.getElementsByClassName("buku")[i].appendChild(cover)
        let kategori = document.createElement("h4")
        kategori.innerHTML = `Kategori : ${valBuku.kategori}`
        document.getElementsByClassName("buku")[i].appendChild(kategori)
        let harga = document.createElement("h4")
        harga.innerHTML = `harga : ${valBuku.harga}`
        document.getElementsByClassName("buku")[i].appendChild(harga) 
        let stok = document.createElement("h4")
        stok.innerHTML = `stok : ${valBuku.stok}`
        document.getElementsByClassName("buku")[i].appendChild(stok) 
    }
}

ShowListBuku(daftarBuku);