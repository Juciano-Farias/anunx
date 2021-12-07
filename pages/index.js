import {
    Container,
    IconButton,
    InputBase,
    Paper,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/core'
import { ThemeContext } from '@emotion/react'

const useStyels = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: '20px',
    },
    cardMedia: {
        paddingTop: '56%'
      }, 
}))

const Home = () => {
    const classes = useStyels()
    return(
        <TemplateDefault>
            <Container maxWidth="md">
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

            
            <Typography component="h2" variant="h4" align="center" color="textPrimary">
                Destaques
            </Typography>
            <br />
            <Container maxWidth="lg" className={classes.cardGrid}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card>
                        <CardMedia 
                            className={classes.cardMedia}
                            image={'https://source.unsplash.com/random'}
                            title="titulo da imagem"
                        />
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                Produto X
                            </Typography>
                            <Typography>
                                R$: 60,00
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card>
                        <CardMedia 
                            className={classes.cardMedia}
                            image={'https://source.unsplash.com/random'}
                            title="titulo da imagem"
                        />
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                Produto X
                            </Typography>
                            <Typography>
                                R$: 60,00
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card>
                        <CardMedia 
                            className={classes.cardMedia}
                            image={'https://source.unsplash.com/random'}
                            title="titulo da imagem"
                        />
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                Produto X
                            </Typography>
                            <Typography>
                                R$: 60,00
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Home