import { createUseStyles } from 'react-jss';

const diamondStyles = createUseStyles({
    diamond: {
        position: "relative",
        width: "200px",
        height: "200px",
        transform: "rotate(45deg)"
    },

    span1: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "0",
        height: "0",
        borderTop: "50px solid transparent",
        borderRight: "50px solid #20bc7d",
        borderBottom: "50px solid #26c893",
        borderLeft: "50px solid transparent"
    }
});

const Diamond = (props) => {
    const styles = diamondStyles();
    
    return (
        <div className={styles.diamond}>
            <span className={styles.span1}></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Diamond;