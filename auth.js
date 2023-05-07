const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
e.preventDefault();

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

// lakukan request ke API
fetch("https://6454643dc18adbbdfeb53cd7.mockapi.io/api/fe-11/accounts")
.then(response => response.json())
.then(data => {
// cek apakah username dan password benar
const user = data.find(user => user.username === username && user.password === password);
if (user) {
// simpan data user ke local storage
localStorage.setItem("loggedInUser", JSON.stringify({ username }));

    // redirect ke homepage
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
})
.catch(error => {
  console.error(error);
  alert("Terjadi kesalahan saat memeriksa akun Anda. Silakan coba lagi nanti.");
});
});
