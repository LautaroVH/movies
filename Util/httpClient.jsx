const API = "https://api.themoviedb.org/3";

export function get(path) {
    return (
        fetch(API + path, {
            headers : {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmI3ZGJjNDk4MDUxZDVkMmNjZGYzMWRjODA3OWZkZCIsInN1YiI6IjYyYjI1MmRkODEzY2I2MDA2MjFhZDhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYZEvhDsQp70NyQWl6QHAX0rpO9kA7H9adZv2QZyhUI",
                "Content-Type": "application/json;charset=utf-8",
            },
            //parseamos el resultado del objeto (para que se convierta en json y poder leerlo)
        }).then ( (result) => result.json())
    )
}