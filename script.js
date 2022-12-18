const baseURLImage = "https://image.tmdb.org/t/p/original/"
const apiKey = "b14ca70e6b5beaaacfd1880619a13b29"
const containerPoster = document.querySelector('.containerPoster')

async function getAllMovies(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`, {
        headers: {
            Authorization: "b14ca70e6b5beaaacfd1880619a13b29"
        }
    })
    const data = await response.json();
    const result = data.results;

    for(i=0; i<result.length; i++){    
            const image = document.createElement('img')
            image.style.cursor = 'pointer'
            image.setAttribute('src', `${baseURLImage}${result[i].poster_path}`)
            containerPoster.appendChild(image)
    }

}

getAllMovies()

// async function getAllSeries(){
//     const response = await fetch(`
//     https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`, {
//         headers: {
//             Authorization: "b14ca70e6b5beaaacfd1880619a13b29"
//         }
//     })

//     const data = await response.json();
//     const result = data.results;
//     console.log(data)
//     console.log(result)

//     for(i=0; i<result.length; i++){    
//             const image = document.createElement('img')
//             image.style.cursor = 'pointer'
//             image.setAttribute('src', `${baseURLImage}${result[i].poster_path}`)
//             image.addEventListener('click', () =>{
//                 window.location.href = `./tvshow.html`
//             })
//             containerPoster.appendChild(image)
//     }

// }


// getMovieByID https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
