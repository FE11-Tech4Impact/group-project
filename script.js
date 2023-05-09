// const artikelId = document.getElementById('read-more');

// const it=""
fetch('https://64527375bce0b0a0f7475dda.mockapi.io/blog-posts')
.then(response => response.json())
.then(data => {
    console.log(data);

    data.forEach((item,index)=> {
        const titleId= 'title' + (index + 1);
        const textId= 'text' + (index + 1);
        const imgId= 'img' + (index + 1);
        const catId= 'category' + (index + 1);
        const readId= 'read-more' + (index + 1);
        const ititle = item.title;
        const itext = item.text;

        document.getElementById(titleId).innerHTML =ititle;
        document.getElementById(textId).innerHTML =itext;
        document.getElementById(imgId).src = item.image;
        document.getElementById(catId).innerHTML = item.category;
        document.getElementById(readId).href = `article.html?id=${item.id}`;
  
    })



})
.catch(error => console.log(error))

fetch('https://64527770a2860c9ed40d2a69.mockapi.io/doctor')
.then(response => response.json())
.then(data => {
    console.log(data);

    data.forEach((item,index)=> {
        const namaId= 'nama' + (index + 1);
        const umurId= 'exp' + (index + 1);
        const jobId= 'job' + (index + 1);
        const priceId= 'price' + (index + 1);

        const iprice = item.price;

        document.getElementById(namaId).innerHTML = 'dr.'+ item.name;
        document.getElementById(umurId).innerHTML = item.experience + ' Tahun';
        document.getElementById(jobId).innerHTML = item.job;
        document.getElementById(priceId).innerHTML = 'Rp. ' + iprice.toLocaleString('id-ID');
    }
    )
})
.catch(error => console.log(error))




// login

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // cek apakah username dan password benar
  if (username === "user" && password === "pass") {
    // simpan data user ke local storage
    localStorage.setItem("loggedInUser", JSON.stringify({ username }));

    // redirect ke homepage
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
});
