const blogPostsContainer = document.getElementById("blog-posts");
const loadMoreButton = document.getElementById("load-more-btn");

let currentPage = 1;
let postsPerPage = 6;

function displayBlogPosts(posts, container, page) {
  const start = postsPerPage * (page - 1);
  const end = start + postsPerPage;
  const paginatedPosts = posts.slice(start, end);

  paginatedPosts.forEach(function (post) {
    const blogPost = document.createElement("div");
    blogPost.classList.add("col-md-4");
    blogPost.innerHTML = `
      <div class="card border-0">
        <img src="${post.image}" class="card-img-top" alt="${post.title}">
        <div class="card-body px-0">
          <h5 class="card-title">${post.title.length > 65 ? post.title.slice(0, 65) + '...' : post.title}</h5>
          <p class="card-text mt-3">${post.text.length > 80 ? post.text.slice(0, 80) + '...' : post.text}</p>
          <button class="btn btn-outline-primary">Lihat Selengkapnya</button>
        </div>
      </div>
    `;
    container.appendChild(blogPost);
  });
}

function fetchBlogPosts(page) {
  fetch(`https://64527375bce0b0a0f7475dda.mockapi.io/blog-posts?page=${page}`)
    .then(response => response.json())
    .then(data => {
      displayBlogPosts(data, blogPostsContainer, currentPage);
      if (data.length < postsPerPage) {
        loadMoreButton.style.display = "none";
      }
    })
    .catch(error => console.log(error));
}

// Mengatur jumlah postingan yang ditampilkan berdasarkan lebar layar browser
function setPostsPerPage() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    postsPerPage = 3;
  } else {
    postsPerPage = 6;
  }
}

// Memuat postingan blog yang pertama kali muncul di halaman web
setPostsPerPage();
fetchBlogPosts(currentPage);

// Menambahkan event listener pada tombol "Muat Lebih Banyak" untuk memuat postingan blog berikutnya
loadMoreButton.addEventListener("click", function (event) {
  event.preventDefault();
  currentPage++;
  fetchBlogPosts(currentPage);
});

// Menambahkan event listener pada saat ukuran layar browser berubah untuk mengatur ulang jumlah postingan yang ditampilkan
window.addEventListener("resize", setPostsPerPage);

