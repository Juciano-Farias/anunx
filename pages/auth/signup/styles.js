import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: 30
    },
    box:{
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    },
    submit: {
        marginTop: theme.spacing(3)
    },
    loading: {
        display: 'block',
        margin: '10px auto',
    }
}))

export default useStyles