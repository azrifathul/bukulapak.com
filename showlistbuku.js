let daftarBuku = [
    {
        id: 0,
        judul: 'Inestable',
        kategori: 'Novel',
        cover: 'inestable.jpg',
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