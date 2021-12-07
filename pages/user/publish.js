import {
    Box,
    Button,
    Container,
    IconButton,
    Select,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    mask:{},
    mainImage: {},
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        borderRadius: '10px',
        boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },
    thumbsContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15

    },
    dropzone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        width: 200,
        height: 150,
        margin: '0 15px 15px 0',
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black',
    },
    thumb: {
        position: 'relative',
        width: 200,
        height: 150,
        margin: '0 15px 15px 0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

        '& $mainImage': {
            backgroundColor: 'blue',
            padding: '6px 10px',
            position: 'absolute',
            bottom: '0',
            left: '0',
        },

        '&:hover $mask': {
            display: 'flex',
        },

        '& $mask': {
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            widht: '100%',
            height: '100%'
        }
    }
  }))

const Publish = () => {
    const classes = useStyles()
    const [files, setFiles] = useState([])  

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (accepedtFile) => {

            const newFiles = accepedtFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            }) 

            setFiles([
                ...files,
                ...newFiles
            ])
        }
    })

    const handleRemoveFile = (fileName) => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
        console.log(files)
    }

    return(
        <TemplateDefault>
            <Container maxWidth="sm">
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
                <Box className={classes.thumbsContainer}>
                    <Box className={classes.dropzone} {...getRootProps()}>
                        <input {...getInputProps()} />
                    <Typography variant="body2" color="textPrimary">
                        Clique para adicionar ou arraste a imagme para aqui.
                    </Typography>
                    </Box>
                    {
                        files.map((file, index) => (
                    <Box 
                        key={file.name}
                        className={classes.thumb}
                        style={{ backgroundImage: `url(${file.preview})` }}
                    >
                        {
                            index === 0 ?
                                <Box className={classes.mainImage}>
                                    <Typography variant="body2" color="secondary">
                                        Principal
                                    </Typography>
                                </Box>      
                            : null
                        }
                        <Box className={classes.mask}>
                            <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                <DeleteForever fontSize="large"/>
                            </IconButton>
                        </Box>
                    </Box>
                        ))
                    }

                </Box>
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
                <Typography component="h6" variant="h6" color="textPrimary">
                    Preço
                </Typography>
                <br />
                <br />
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Valor</InputLabel>
                    <OutlinedInput 
                    onChange={() => {}}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    labelWidth={40}
                    />
                </FormControl>
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