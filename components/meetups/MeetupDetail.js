import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <div className={classes.detail}>
      <img src={props.image} />
    </div>
  );
};

export default MeetupDetail;
