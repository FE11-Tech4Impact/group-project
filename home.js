const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
// mengambil data dari local storage

const navbarInfo = document.getElementById("info")
const sideInfo = document.getElementById("info-side")
const close = document.getElementById("close")
const burgerMenu = document.getElementById("burger")

const sideBar= document.getElementById("side")
burgerMenu.addEventListener("click", function(e) {
    e.preventDefault();
    side.classList.toggle("show")
    })

if (!loggedInUser) {
    // tampilkan tombol login dan register di navbar
    navbarInfo.innerHTML = `
    <a href="login.html" class="navbar-action-item">Masuk</a>
    <a href="#" class="btn-primary">Daftar</a>
    `;
    
    sideInfo.innerHTML = `
     
    <a href="login.html" class="navbar-action-item">Masuk</a>
    <a href="#" class="btn-primary">Daftar</a>
    `;
} else {
  // tampilkan profil user di halaman homepage

    // tampilkan tombol logout di navbar
    navbarInfo.innerHTML = `
    <div class="info-title">
    <h6 class="navbar-info-title">Halo, <span class="navbar-info-name">${loggedInUser.username}</span></h6>
    </div>
    <a href="" id="logout" class="exit">Keluar</a>
    `;

    sideInfo.innerHTML = `
    <div class="info-title">
    <h6 class="navbar-info-title">Halo, <span class="navbar-info-name">${loggedInUser.username}</span></h6>
    </div>
    `;

    close.innerHTML = `<a href="index.html" id="logout-side" class="exit">Keluar</a>`
}


// logout
const logout = document.getElementById("logout");

logout.addEventListener("click", function(e) {
    e.preventDefault();
    
    // hapus data user dari local storage
    localStorage.removeItem("loggedInUser");
    
    // redirect ke homepage
    window.location.href = "index.html";
    });

// logout/side
const logoutSide = document.getElementById("logout-side");

logoutSide.addEventListener("click", function(e) {
    e.preventDefault();
    
    // hapus data user dari local storage
    localStorage.removeItem("loggedInUser");
    
    // redirect ke homepage
    window.location.href = "index.html";
    });
