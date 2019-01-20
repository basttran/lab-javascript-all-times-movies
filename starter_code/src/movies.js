/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieArray) {
  var updatedArray = movieArray.map(function (oneMovie) {
    var copiedEntry = Object.assign({}, oneMovie);
    return copiedEntry;
  });

  updatedArray.map(function(movie) {
    var hours = 0;
    var minutes = 0;
    if (movie.duration.indexOf(" ") !== -1) {
      minutes = parseInt(movie.duration.slice(movie.duration.indexOf(" ")+1, movie.duration.indexOf("m")));
      hours = parseInt(movie.duration.slice(0, movie.duration.indexOf("h")));
    } else {
      if (movie.duration.indexOf("h") !== -1) {
        hours = parseInt(movie.duration.slice(0, movie.duration.indexOf("h")));
      };

      if (movie.duration.indexOf("m") !== -1) {
        minutes = parseInt(movie.duration.slice(0, movie.duration.indexOf("m")));
      };
    };
    movie.duration = parseInt(60*hours + minutes);
  });
  return updatedArray;
}



// Get the average of all rates with 2 decimals

function ratesAverage(arrayOfMovies) {
  var arrayOfRatings = [];

  arrayOfMovies.forEach(function(oneMovie) {
    var ratingInt = Number(oneMovie.rate);
    console.log(ratingInt);

    arrayOfRatings.push(ratingInt);
  });

  var averageRating =
    arrayOfRatings.reduce(function(sum, oneRating) {
      return sum + oneRating;
    }) / arrayOfRatings.length;

  return Math.round(100 * averageRating) / 100;
}

// Get the average of Drama Movies

function dramaMoviesRate(arrayOfMovies) {
  var dramaMovies = [];

  arrayOfMovies.forEach(function(oneMovie) {
    if (oneMovie.genre.indexOf("Drama") != -1) {
      dramaMovies.push(oneMovie);
    }
  });

  if (dramaMovies.length == 0) {
    return undefined;
  } else {
    return ratesAverage(dramaMovies);
  }
}
// Order by time duration, in growing order

function orderByDuration(arrayOfMovies) {
  arrayOfMovies.sort(function(movieA, movieB) {
    var returnVal;

    if (movieA.duration < movieB.duration) {
      returnVal = -20;
    } else if (movieA.duration > movieB.duration) {
      returnVal = 20;
    } else if (movieA.duration == movieB.duration) {
      if (movieA.title > movieB.title) {
        console.log("lolhuh");
        returnVal = 30;
      } else if (movieA.title < movieB.title) {
        console.log("lolwut");
        returnVal = -30;
      } else if (movieA.title == movieB.title) {
        console.log("lolyeaaaaa");
        returnVal = 0;
      }
    }

    console.log(returnVal);

    return returnVal;
  });

  return arrayOfMovies;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movieArray) {
  var results = movieArray.filter(function(movie) {
    return movie.director.toLowerCase() == "steven spielberg";
  });
  return results;
}

  

// Order by title and print the first 20 titles

// Best yearly rate average