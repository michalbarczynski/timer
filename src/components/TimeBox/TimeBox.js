import styles from './TimeBox.module.scss';

const TimeBox = props => {

    const formatTime = duration => {
        let milliseconds = Math.floor((duration % 1000) / 100), 
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    return (
        <div className={styles.box}>
            {formatTime(props.children)}
        </div>
    );
};

export default TimeBox;