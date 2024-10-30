const movies = [
    {"name": "Inception", "reviews": [10,9,9,8,9]},
    {"name": "Interstellar", "reviews": []},
    {"name": "Eric Chen", "reviews": [100000000000,1]}
    ]

function average() {
    for(let i = 0; i < movies.length; i++) {
        if (movies[i].reviews.length == 0) {
            console.log(movies[i].name, "No Reviews")
        } else {
            let avg = 0
            for (let j = 0; j < movies[i].reviews.length; j++) {
                avg += movies[i].reviews[j]/movies[i].reviews.length
            }
            console.log(movies[i].name, avg)
        }
    }
}

average()