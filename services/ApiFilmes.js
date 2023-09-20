import axios from "axios";


const ApiFilmes = axios.create({
    baseURL:' https://api.themoviedb.org/3/',
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODIxZjdiZjBhNTFjMDk3NTY1MzIzZTQ4ZDIzNzFhNyIsInN1YiI6IjY0MzVkZjVmMWY3NDhiMDBkNWVlZjk2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8v8zZud18Xpo3SLtQSEsmh70X6LTPjkk5Lig7ZCE_-M'
    }
})

export default ApiFilmes