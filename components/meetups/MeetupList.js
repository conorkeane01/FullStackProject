import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.meetingId}
          id={meetup.meetingId}
          movieImage={meetup.movieImage}
          movieTitle={meetup.movieTitle}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
