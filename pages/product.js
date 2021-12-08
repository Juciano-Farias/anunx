import {
    Avatar,
    Box,
    Card,
    CardHeader,
    CardMedia,
    Chip,
    Container,
    Grid,
    Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core'

import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    box:{
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName: {
        margin: '15px 0',
    },
    price: {
        fontWeight: 'bold',
        marginBottom: '15px'
    },
    card: {
        height: '100%'
    },
    cardMedia: {
        paddingTop: '56%'
    }
}))

const Product = () => {
    const classes=useStyles()

    return(
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel
                                autoPlay={false}
                                animation="slide"
                                navButtonsAlwaysVisible
                                navButtonsProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }} 
                            >
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image='https://source.unsplash.com/random?q=1'
                                        title="Título da imagem"
                                    />
                                </Card>
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image='https://source.unsplash.com/random?q=2'
                                        title="Título da imagem"
                                    />
                                </Card>
                            </Carousel>
                        </Box>

                        <Box className={classes.box} textAlign="left">
                            <Typography component="span" variant="caption">Publicado em 16 junho de 2021</Typography>
                            <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component="h4" variant="h4" className={classes.price}>R$ 50.000,00</Typography>
                            <Chip label="categoria" />
                        </Box>

                        <Box className={classes.box} textAlign="left">
                            <Typography component="h6" variant="h6" >Descrição</Typography>
                            <Typography component="p" variant="body2" >ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ip</Typography>
                        </Box>
                    
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader 
                                avatar={
                                    <Avatar>T</Avatar>
                                }
                                title='Juciano Gomes'
                                subheader="juciano@email.com" 
                            />
                            <CardMedia 
                                image='https://source.unsplash.com/random'
                                title="Juciano Gomes"
                            />
                        </Card>
                        <Box className={classes.box}>
                                <Typography component="h6" variant="h6">Localização</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product