let movie = {
    //this curly paranthesis is representing ur creating a object.
    movieName: "Sita Ka Gita",
    releaseDate: "32/13/33",
    directorName: "Dhanlaxmi Hoodchelwar",

    display: function()
    {
        console.log(this.movieName+"     "+this.releaseDate);
    }
};
movie.display()// by using '.' operator we r calling function.
// console.log(book.price);
console.log(movie['directorName']);