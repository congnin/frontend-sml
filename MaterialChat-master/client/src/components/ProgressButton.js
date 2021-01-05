import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ProgressButton = ({
  title,
  formId,
  variant = "contained",
  type = "submit",
  onClick,
}) => {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <Button
        form={formId}
        type={type}
        variant={variant}
        color="primary"
        className={buttonClassname}
        style={{ margin: "1em .5em" }}
        disabled={loading}
        onClick={onClick}
        // onClick={handleButtonClick}
      >
        {title}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </>

    // <div className={classes.root}>
    //   {/* <div className={classes.wrapper}>
    //     <Fab
    //       aria-label="save"
    //       color="primary"
    //       className={buttonClassname}
    //       onClick={handleButtonClick}
    //     >
    //       {success ? <CheckIcon /> : <SaveIcon />}
    //     </Fab>
    //     {loading && (
    //       <CircularProgress size={68} className={classes.fabProgress} />
    //     )}
    //   </div> */}
    //   <div className={classes.wrapper}>
    //     <Button
    //       form={formId}
    //       type="submit"
    //       variant="contained"
    //       color="primary"
    //       className={buttonClassname}
    //       disabled={loading}
    //       onClick={handleButtonClick}
    //     >
    //       {title}
    //     </Button>
    //     {loading && (
    //       <CircularProgress size={24} className={classes.buttonProgress} />
    //     )}
    //   </div>
    // </div>
  );
};

export default ProgressButton;