import {
    Box,
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography
} from "@material-ui/core"

import SearchIcon from '@material-ui/icons/search'

import TemplateDefault from '../../src/templates/Default'

import { makeStyles } from '@material-ui/core'
import Card from "../../src/components/Card"

const useStyels = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: '20px',
    },
    cardGrid: {
        marginTop: '50px',
    },
    box:{
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}))

const List = () => {
    const classes = useStyels()

    return(
        <TemplateDefault>
            <Container maxWidth="md" className={classes.searchContainer}>

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
                <Box className={classes.box} textAlign="left">
                    <Typography component="h6" variant="h6">Anúncios</Typography>
                    <Typography component="span" variant="subtitle2">ENCONTRADOS 200 ANÚNCIOS</Typography>
                    <br />
                    <br />
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card 
                                image={'https://source.unsplash.com/random'}
                                title="Produto 1"
                                subtitle="R$: 60,00"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card 
                                image={'https://source.unsplash.com/random'}
                                title="Produto 2"
                                subtitle="R$: 60,00"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card 
                                image={'https://source.unsplash.com/random'}
                                title="Produto 3"
                                subtitle="R$: 60,00"
                            />
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </TemplateDefault>
    )
}

export default List