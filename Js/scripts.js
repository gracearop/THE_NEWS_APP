// const apiKey ="7959e3fda5db4003b4c7b8b7e5143a7e";
// const apiKey ="9f5881a673804568a67cbd14f3df08b1";
// const blogContainer = document.getElementById("bolg-container")

// const searchField = document.getElementById('search-input');
// const searchButton = document.getElementById('search-button');

// searchButton.addEventListener("click", async () =>{
//     const query = searchField.value.trim()
//     if (query !== ""){
//         try{
//             const articles = await fetchNewsQuery(query);
//             displayBlogs(articles);
//         } catch (error){
//             console.log('Error fetching news by query', error);
//         }
//     }
// })

// async function fetchNewsQuery(query){
//     try{
//         const apiUrl = `https:newsapi.org/v2/everything?q=${query}&pagesSize=15&apiKey=${apiKey}`;
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data);
//         return data.articles;
// } catch (error){
//     console.error('Error fetching random news', error);
//     return [];
// }
// }


// async function fetchRandomNews(){
//     try{
//             // const apiUrl = ``;
            
//         const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
//             const response = await fetch(apiUrl);
//             const data = await response.json();
//             console.log(data);
//             return data.articles;
//     } catch (error){
//         console.error('Error fetching random news', error);
//         return [];
//     }
// }

// function displayBlogs(articles){
//     blogContainer.innerHTML = "";
//     articles.forEach((article) => {

// const blogCard = document.createElement('div');
// blogCard.classList.add('blog-card');
// blogCard.innerHTML = `
//     <img src="images/Capture.PNG" alt="">
//     <h2>${post.title}</h2>
//     <p>${post.body}</p>
// `;
// blogContainer.appendChild(blogCard);

//         const blogCard = document.createElement("div");
//         // Add classname of div to the initialized variable for the div (done below)
//         blogCard.classList.add("blog-card");

//         const img = document.createElement("img")
//         img.src = article.urlToImage;
//         img.alt = article.title;

//         const title = document.createElement("h2");
//         // title.textContent = article.title;
//         const truncatedTitle = article.title.length > 30
//         ? article.title.slice(0, 30) + "..."
//         : article.title;
//         title.textContent = truncatedTitle;

//         const description = document.createElement("p")
//         // description.textContent = article.description
//         const truncatedDes = article.description.length > 120
//         ? article.description.slice(0, 120) + "..."
//         : article.description;
//         description.textContent = truncatedDes;

//         blogCard.appendChild(img);
//         blogCard.appendChild(title);
//         blogCard.appendChild(description);
//         blogCard.addEventListener("click", () => {
//             window.open(article.url, "_blank");
//         })
//         blogcontainer.appendChild(blogCard);

//     });
// }


// (async () => {
//     try {
//         const articles = await fetchRandomNews().then((res, err) => {
//             console.log(res.data);
//         });
//         displayBlogs(articles);
//     } catch (error) {
        
//     console.error('Error fetching random news', error);

//     }
// })();
// Add an event listener to the search button
// document.getElementById('search-button').addEventListener('click', async function() {
//     try {
//         // Get the value of the search input
//         const searchTerm = document.getElementById('search-input').value;
//         // Fetch related posts from the API based on the search term
//         const relatedPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`);
//         if (!relatedPosts.ok) {
//             throw new Error('Failed to fetch related posts');
//         }
//         const data = await relatedPosts.json();
//         // Render the related posts to the blog container
//         renderPosts(data);
//     } catch (error) {
//         console.error('An error occurred while fetching and rendering related posts:', error.message);
//     }
// });

// const searchField = document.getElementById('search-input');
// const searchButton = document.getElementById('search-button');

// searchButton.addEventListener("click", async() =>{
//     const query = searchField.value.trim();
//     if (query !== ""){
//         try {
//             const posts = await fetchNewsQuery (query);
//             renderPosts(posts);
//         } catch(error){
//             console.log("Error fetching news query", error);
//         }
//     }
// })

// async function fetchNewsQuery(query){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
//         if (!response.ok) {
//             throw new Error('Failed to fetch posts');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching posts:', error.message);
//         throw error;
//     }
// }

// Define the model object
const PostModel = {
    // Method to fetch all posts from the JSONPlaceholder API
    async getAllPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching posts:', error.message);
            throw error;
        }
    }
};


// Add an event listener to the search button
document.getElementById('search-button').addEventListener('click', async function() {
    try {
        // Get the value of the search input
        const searchTerm = document.getElementById('search-input').value;
        // Fetch related posts from the API based on the search term with a limit of 10
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}&_limit=10`);
        if (!response.ok) {
            throw new Error('Failed to fetch related posts');
        }
        const data = await response.json();
        // Check if there are no related posts or if the search term is not found
        if (data.length === 0 || (searchTerm !== "" && data.length === 0)) {
            const blogContainer = document.getElementById('bolg-container');
            blogContainer.innerHTML = '<p class="no-posts-message">No related posts found.</p>';
        } else {
            // Render the related posts to the blog container
            renderPosts(data);
        }
    } catch (error) {
        console.error('An error occurred while fetching and rendering related posts:', error.message);
    }
});


// Function to render posts to the blog container
function renderPosts(posts) {
    const blogContainer = document.getElementById('bolg-container');
    blogContainer.innerHTML = ''; // Clear previous content
    posts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.innerHTML = `
            <img src="images/Capture.PNG" alt="">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        blogContainer.appendChild(blogCard);
    });
}

// Fetch posts and render them to the blog container
(async () => {
    try {
        const posts = await PostModel.getAllPosts();
        renderPosts(posts);
    } catch (error) {
        console.error('An error occurred while fetching and rendering posts:', error.message);
    }
})();

document.addEventListener('DOMContentLoaded', async function() {
    try {
        const posts = await PostModel.getAllPosts();
        renderPosts(posts);
    } catch (error) {
        console.error('An error occurred while fetching and rendering posts:', error.message);
    }
});


// const searchField = document.getElementById('search-input');
// const searchButton = document.getElementById('search-button');

// searchButton.addEventListener("click", ()=>{
//     console.log("Search button clicked");
//     handleSearch();
// });


// async function fetchNewsQuery(query) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}&_limit=8`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch posts');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching posts:', error.message);
//         throw error;
//     }
// }

// async function handleSearch(fetchNewsQuery) {
//         console.log("Handling search");
//     const query = searchField.value.trim();
//     if (query !== "") {
//         try {
//             const posts = await fetchNewsQuery(query);
//             renderPosts(posts);
//         } catch (error) {
//             console.log("Error fetching news query", error);
//         }
//     }
// }


