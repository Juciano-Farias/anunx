import { CircularProgress, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    center:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30vh'
    }
}))

const LoadingAuth = () => {
    const classes = useStyles()

    return (
        <div className={classes.center}>
            <CircularProgress />
        </div>
    )
}

export default LoadingAuth