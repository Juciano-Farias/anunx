import {
    Container,
    IconButton,
    InputBase,
    Paper,
    Typography,
    Grid,
} from '@material-ui/core'

import Card from '../src/components/Card'

import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/core'

const useStyels = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: '20px',
    },
    cardGrid: {
        marginTop: '50px',
    }
}))

const Home = () => {
    const classes = useStyels()
    return(
        <TemplateDefault>
            <Container maxWidth="md" className={classes.searchContainer}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary">
                    O que deseja encontrar?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase 
                        placeholder="Ex:.. iPhone 12 mini com garantia"
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="md" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align="center" color="textPrimary">Destaques</Typography>
                <br />
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} >
                    <Card 
                        image={'https://source.unsplash.com/random'}
                        title="Produto X"
                        subtitle="R$: 60,00"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card 
                        image={'https://source.unsplash.com/random'}
                        title="Produto X"
                        subtitle="R$: 60,00"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card 
                        image={'https://source.unsplash.com/random'}
                        title="Produto X"
                        subtitle="R$: 60,00"
                        />
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Home