import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: 30
    },
    box:{
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    }
}))

export default useStyles