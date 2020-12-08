function Movie(props) {
    return (
        <div>
            <h1>Title: {props.title}</h1>
    <p>Runtime: {props.hours} Hours {props.minuets} Minuets</p>
        </div>
    );
}

export default Movie;