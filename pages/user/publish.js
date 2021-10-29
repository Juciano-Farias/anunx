import { Box, Button, Container, Select, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(8, 0, 6)
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        borderRadius: '10px',
        boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
    }
  }))

const Publish = () => {
    const classes = useStyles()

    return(
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Título do anúncio
                </Typography>
                <TextField 
                    label="ex: Bicicleta aro 18 com garantia."
                    size="small"
                    fullWidth
                />
                <br /><br />
                <Typography component="h6" variant="h6" color="textPrimary">
                    Conteúdo
                </Typography>
                <Select
                    native
                    value=""
                    fullWidth
                    onChange={() => {}}
                    inputProps={{
                        name: 'age',
                    }}
                >
                    <option value="">Selecione</option>
                    <option value={1}>Bebê e Crianças</option>
                    <option value={2}>Agriculturas</option>
                    <option value={3}>Moda</option>
                    <option value={3}>Carros, Motos e Barcos</option>
                    <option value={3}>Serviços</option>
                    <option value={3}>Lazer</option>
                    <option value={3}>Animais</option>
                    <option value={3}>Moveis, Casa e Jardim</option>
                    <option value={3}>Imóveis</option>
                    <option value={3}>Equipamentos e Ferramentas</option>
                    <option value={3}>Esportes</option>
                    <option value={3}>Tecnologia</option>
                    <option value={3}>Emprego</option>
                    <option value={3}>Outros</option>
                </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Imagens
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary">
                    A primeira imagem é a foto principal do anúncio.
                </Typography>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Descrição
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary">
                    Escreve com detalhes o que está vendendo.
                </Typography>
                <TextField 
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                    Dados de contato
                </Typography>
                <TextField 
                    label="Nome"
                    variant="outlined"
                    size="small"
                    fullWidth
                />

                < br/>< br/>

                <TextField 
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                
                < br/>< br/>

                <TextField 
                    label="Telefone"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                    <Button variant="contained" color="primary">
                        Publicar anúncio
                    </Button>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default Publish