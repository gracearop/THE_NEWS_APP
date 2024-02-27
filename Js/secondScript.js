// $(document).ready(function(){
//     $(document).ready(async function(){
//     // const newsContainer = document.getElementById("news-container");
    
//     $('.news').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev">Previous</button>',
//         nextArrow: '<button type="button" class="slick-next">Next</button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1
//                 }
//             }
//         ]
//     });

//     // const newsContainer = document.getElementById("news-container");

//     // Define the model object
//     const PostsModel = {
//         // Method to fetch all posts from the JSONPlaceholder API
//         async getAllPostes() {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch posts');
//                 }
//                 const data = await response.json();
//                 return data;
//             } catch (error) {
//                 console.error('Error fetching posts:', error.message);
//                 throw error;
//             }
//         }
//     };
    
//     // Function to render posts to the blog container
//     function renderPostes(postes) {
//         const newsContainer = document.getElementById('news-container');
//         newsContainer.innerHTML = ''; // Clear previous content
//         postes.forEach(post => {
//             const newsCard = document.createElement('div');
//             newsCard.classList.add('news-card');
//             newsCard.innerHTML = `
//                 <img src="images/Capture.PNG" alt="">
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             `;
//             newsContainer.appendChild(newsCard);
//         });
//     }
    
//     // Fetch posts and render them to the blog container
//     (async () => {
//         try {
//             const postes = await PostsModel.getAllPostes();
//             renderPostes(postes);
//         } catch (error) {
//             console.error('An error occurred while fetching and rendering posts:', error.message);
//         }
//     })();
    
//     document.addEventListener('DOMContentLoaded', async function() {
//         try {
//             const postes = await PostsModel.getAllPostes();
//             renderPostes(postes);
//         } catch (error) {
//             console.error('An error occurred while fetching and rendering posts:', error.message);
//         }
//     });
    




// });


$(document).ready(async function(){
    const newsContainer = $('.news'); // Select the .news container
    
    // Define the model object
    const PostsModel = {
        // Method to fetch all posts from the JSONPlaceholder API
        async getAllPostes() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
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
    
    // Function to render posts to the news container
    function renderPostes(postes) {
        postes.forEach(post => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('news-card');
            newsCard.innerHTML = `
                <img src="images/Capture.PNG" alt="">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            newsContainer.append(newsCard); // Append each post to the container
        });
    }
    
    // Fetch posts and render them to the news container
    try {
        const postes = await PostsModel.getAllPostes();
        renderPostes(postes);
    } catch (error) {
        console.error('An error occurred while fetching and rendering posts:', error.message);
    }
    
    // Initialize the Slick slider after rendering the posts
    newsContainer.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
