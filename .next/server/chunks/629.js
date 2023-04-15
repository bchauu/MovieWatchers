"use strict";
exports.id = 629;
exports.ids = [629];
exports.modules = {

/***/ 629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ movie)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./card/MovieCard.js

const MovieCard = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "movieCard",
        children: props.children
    });
};

;// CONCATENATED MODULE: ./components/MovieItem.js



function MovieItem(props) {
    const movie = props.movie;
    const url = "https://image.tmdb.org/t/p/w200/";
    const id = movie.id;
    const genreIds = {
        "28": "Action",
        "12": "Adventure",
        "16": "Animation",
        "35": "Comedy",
        "80": "Crime",
        "99": "Documentary",
        "18": "Drama",
        "10751": "Family",
        "14": "Fantasy",
        "36": "History",
        "27": "Horror",
        "10402": "Music",
        "9648": "Music",
        "10749": "Romance",
        "878": "Science Fiction",
        "10770": "TV Movie",
        "53": "Thriller",
        "10752": "War",
        "37": "Western"
    };
    let genreStr = "";
    movie.genre_ids.forEach((id)=>{
        if (genreIds[id.toString()]) {
            genreStr += `${genreIds[id]},`;
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "movieList",
        children: /*#__PURE__*/ jsx_runtime_.jsx(MovieCard, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: {
                    pathname: `/details/${id}`,
                    query: {
                        title: movie.title,
                        lang: movie.original_language,
                        desc: movie.overview,
                        poster: movie.poster_path,
                        score: movie.vote_average,
                        genres: genreStr,
                        date: movie.release_date
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "imgLink",
                        src: url + movie.poster_path
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "pLink",
                        children: movie.title
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_MovieItem = (MovieItem);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./components/MovieList.js



function Movie(props) {
    const movies = props.movies;
    const page = props.page;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            container: true,
            spacing: 1,
            justifyContent: "center",
            gap: 3,
            children: movies.map((movie)=>/*#__PURE__*/ jsx_runtime_.jsx(components_MovieItem, {
                    movie: movie,
                    page: page
                }, movie.id))
        })
    });
}
/* harmony default export */ const MovieList = (Movie);

;// CONCATENATED MODULE: ./card/ListCard.js

const ListCard = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "listCard",
        children: props.children
    });
};

;// CONCATENATED MODULE: ./pages/movie.js






function MoviePage() {
    const [popular, setPopular] = (0,external_react_.useState)([]);
    const [popularPage, setPopularPage] = (0,external_react_.useState)(1);
    const [upcomingPage, setUpcomingPage] = (0,external_react_.useState)(1);
    const [upcoming, setUpcoming] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3cda0804d7e6fb92273c090b8e4e1f22&language=en-US&page=${popularPage}`).then((res)=>res.json()).then((res)=>setPopular([
                ...res.results
            ]));
    }, [
        popular
    ]);
    (0,external_react_.useEffect)(()=>{
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3cda0804d7e6fb92273c090b8e4e1f22&language=en-US&page=${upcomingPage}`) //upcoming
        .then((res)=>res.json()).then((res)=>setUpcoming([
                ...res.results
            ]));
    }, [
        upcoming
    ]);
    const popularPageChange = (event, value)=>{
        setPopularPage(value);
    };
    const upcomingPageChange = (event, value)=>{
        setUpcomingPage(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListCard, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "listSection",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "listName",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Latest Movies"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pagination",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Pagination, {
                                count: 10,
                                color: "primary",
                                page: upcomingPage,
                                onChange: upcomingPageChange
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MovieList, {
                            movies: upcoming,
                            page: upcomingPage
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "listSection",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "listName",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Trending Movies"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pagination",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Pagination, {
                                count: 10,
                                color: "primary",
                                page: popularPage,
                                onChange: popularPageChange
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MovieList, {
                            movies: popular,
                            page: popularPage
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const movie = (MoviePage);


/***/ })

};
;