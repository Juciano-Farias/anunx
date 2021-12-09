import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        borderRadius: '10px',
        boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },
    inputLabel:{
        fontWeight: 400,
        color: theme.palette.primary.main
    },
    
  }))

  export default useStyles