import classes from './MeetupDetail.module.css'

function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.movieImage} alt={props.movieTitle} />
            <h1>{props.movieTitle}</h1>
            <address>{props.address}</address>
            <p>{props.review}</p>
        </section>
    )
}

export default MeetupDetail