const blogPostsContainer = document.getElementById("blog-posts");
const loadMoreButton = document.getElementById("load-more-btn");
const articleContainer = document.getElementById("article-container");


let currentPage = 1;
let postsPerPage = 6;

function displayBlogPosts(posts, container, page, articleId) {
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
          <a href="${getArticleUrl(post.id)}" class="btn btn-outline-primary">Lihat Selengkapnya</a>
        </div>
      </div>
    `;
    container.appendChild(blogPost);
  });
}

function getArticleUrl(articleId) {
  return `article.html?id=${articleId}`;
}

function fetchBlogPosts(page, articleId) {
  fetch(`https://64527375bce0b0a0f7475dda.mockapi.io/blog-posts?page=${page}`)
    .then(response => response.json())
    .then(data => {
      displayBlogPosts(data, blogPostsContainer, currentPage, articleId);
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


function displayArticle(article) {
    const articleElement = document.createElement("div");
    articleElement.innerHTML = `
      <h2 class="card-title">${article.title}</h2>
      <img src="${post.image}" class="card-img-top" alt="${post.title}">
            <p class="card-text">${article.text}</p>
    `;
    articleContainer.appendChild(articleElement);
  }
  
  function fetchArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
  
    fetch(`https://64527375bce0b0a0f7475dda.mockapi.io/blog-posts/${articleId}`)
      .then(response => response.json())
      .then(data => {
        displayArticle(data);
      })
      .catch(error => console.log(error));
  }
  
  fetchArticle();
  