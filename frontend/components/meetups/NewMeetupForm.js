import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const movieTitleInputRef = useRef();
  const movieImageInputRef = useRef();
  const addressInputRef = useRef();
  const reviewInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredMovieTitle = movieTitleInputRef.current.value;
    const enteredMovieImage = movieImageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredreviewInputRef = reviewInputRef.current.value;

    const meetupData = {
      meetingId: enteredMovieTitle,
      movieTitle: enteredMovieTitle,
      movieImage: enteredMovieImage,
      address: enteredAddress,
      review: enteredreviewInputRef,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='movieTitle'>Movie Title (must be unique: it's the meeting ID)</label>
          <input type='text' required id='movieTitle' ref={movieTitleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='movieImage'>Movie Image</label>
          <input type='url' required id='movieImage' ref={movieImageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='review'>review</label>
          <textarea
            id='review'
            required
            rows='5'
            ref={reviewInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
