import {
    Box,
    Button,
    Container,
    IconButton,
    Select,
    Typography,
    InputLabel,
    InputAdornment,
    MenuItem,
    FormControl,
    FormHelperText,
    Input
} from '@material-ui/core'

import { Formik } from 'formik' //formik e yup para validacao de formularios
import * as yup from 'yup';

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever, ErrorSharp } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'
import { useState } from 'react'

const validationSchema = yup.object().shape({
    title: yup.string() 
        .min(6, 'Escreva um tíitulo maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'),

    category: yup.string().required('Campo obrigatório'),

    files: yup.array()
        .min(1, 'Envie pelo menos uma foto')
        .required('Campo obrigatório'),

    description: yup.string()
        .min(30, 'Escreva uma descrição com pelo menos 30 caractes.')
        .max(800, 'Título muito grande')
        .required('Campo obrigatório'),

    price: yup.number().required('Campo obrigatório'),
    email: yup.string().email('Digite um email válido').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),

})

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
    inputLabel:{
        fontWeight: 400,
        color: theme.palette.primary.main
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

    return(
        <TemplateDefault>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description:'',
                    price:'',
                    email: '',
                    name: '',
                    phone: '',
                    files: [],
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

            {
                ({
                    touched,
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    setFieldValue
                }) => {

                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const { getRootProps, getInputProps } = useDropzone({
                        accept: 'image/*',
                        onDrop: (accepedtFile) => {
                
                            const newFiles = accepedtFile.map(file => {
                                return Object.assign(file, {
                                    preview: URL.createObjectURL(file)
                                })
                            }) 
                
                            setFieldValue('files', [
                                ...values.files,
                                ...newFiles
                            ])
                        }
                    })
                
                    const handleRemoveFile = (fileName) => {
                        const newFileState = values.files.filter(file => file.name !== fileName)
                        setFieldValue('files', newFileState)
                    }

                    return(
                        <form onSubmit={handleSubmit}>
                            <Container maxWidth="sm">
                                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                                    Publicar anúncio
                                </Typography>
                                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                                    Quanto mais detalhado melhor!
                                </Typography>
                            </Container>

                            <br/>
                            <br/>

                            <Container maxWidth="md" className={classes.boxContainer}>
                                <Box className={classes.box}>
                                    <FormControl error={errors.title && touched.title} fullWidth>
                                        <InputLabel className={classes.inputLabel}>Título do anúncio</InputLabel>
                                            <Input 
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                        <FormHelperText>
                                            { errors.title && touched.title ? errors.title : null}
                                        </FormHelperText>
                                    </FormControl>

                                    <br /><br />

                                    <FormControl error={errors.category  && touched.category} fullWidth>
                                        <InputLabel className={classes.inputLabel}>Categoria</InputLabel>
                                        <Select
                                            name="category"
                                            value={values.category}
                                            fullWidth
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Bebê e Crianças">Bebê e Crianças</MenuItem>
                                            <MenuItem value="Agriculturas">Agriculturas</MenuItem>
                                            <MenuItem value="Moda">Moda</MenuItem>
                                            <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                            <MenuItem value="Serviços">Serviços</MenuItem>
                                            <MenuItem value="Lazer">Lazer</MenuItem>
                                            <MenuItem value="Animais">Animais</MenuItem>
                                            <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                                            <MenuItem value="Imóveis">Imóveis</MenuItem>
                                            <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                            <MenuItem value="Esportes">Esportes</MenuItem>
                                            <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                            <MenuItem value="Emprego">Emprego</MenuItem>
                                            <MenuItem value="Outros">Outros</MenuItem>
                                        </Select>
                                        <FormHelperText>
                                            { errors.category && touched.category ? errors.category : null }
                                        </FormHelperText>
                                    </FormControl>
                                </Box>

                            </Container>
                            <Container maxWidth="md" className={classes.boxContainer}>
                                <Box className={classes.box}>
                                    <Typography component="h6" variant="h6" color={errors.files && touched.files ? "error" : "textPrimary"}>
                                        Imagens
                                    </Typography>
                                    <Typography component="div" variant="body2" color={errors.files && touched.files ? "error" : "textPrimary"}>
                                        A primeira imagem é a foto principal do anúncio.
                                    </Typography>
                                    {
                                        errors.files && touched.files
                                        ? <Typography variant="body2" color="error">{errors.files && touched.files}</Typography>
                                        : null
                                    }
                                    <Box className={classes.thumbsContainer}>
                                        <Box className={classes.dropzone} {...getRootProps()}>
                                            <input name="files" {...getInputProps()} /> 
                                        <Typography variant="body2" color={errors.files ? "error" : "textPrimary"}>
                                            Clique para adicionar ou arraste a imagme para aqui.
                                        </Typography>
                                        </Box>
                                        {
                                            values.files.map((file, index) => (
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
                                <FormControl error={errors.description && touched.description} fullWidth>
                                    <InputLabel className={classes.inputLabel}>Escreve com detalhes o que está vendendo.</InputLabel>
                                    <Input 
                                        name="description"
                                        value={values.description}
                                        multiline
                                        onChange={handleChange}
                                        rows={6}
                                        variant="outlined"
                                    />
                                    <FormHelperText>
                                        { errors.description  && touched.description ? errors.description : null}
                                    </FormHelperText>
                                </FormControl>
                                </Box>
                            </Container>

                            <Container maxWidth="md" className={classes.boxContainer}>
                                <Box className={classes.box}>
                                    <FormControl error={errors.price && touched.price} fullWidth>
                                        <InputLabel className={classes.inputLabel}>Preço de venda</InputLabel>
                                        <Input 
                                            name="price"
                                            value={values.price}
                                            onChange={handleChange}
                                            variant="outlined"
                                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                        />
                                        <FormHelperText>
                                            { errors.price && touched.price ? errors.price : null }
                                        </FormHelperText>
                                    </FormControl>
                                    <br />
                                    <br />
                                </Box>
                            </Container>

                            <Container maxWidth="md" className={classes.boxContainer}>
                                <Box className={classes.box}>
                                    <Typography variant="h5" component="h5">Dados de contato</Typography>
                                    <FormControl error={errors.name && touched.name} fullWidth>
                                        <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                                            <Input 
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                        <FormHelperText>
                                            { errors.name && touched.name ? errors.name : null }
                                        </FormHelperText>
                                    </FormControl>

                                < br/>< br/>

                                <FormControl error={errors.email && touched.email} fullWidth>
                                        <InputLabel className={classes.inputLabel}>Email</InputLabel>
                                            <Input 
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                        <FormHelperText>
                                            { errors.email && touched.email ? errors.email : null }
                                        </FormHelperText>
                                    </FormControl>
                                
                                < br/>< br/>

                                <FormControl error={errors.phone && touched.phone} fullWidth>
                                        <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
                                            <Input 
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                        <FormHelperText>
                                            { errors.phone && touched.phone ? errors.phone : null }
                                        </FormHelperText>
                                    </FormControl>
                                </Box>
                            </Container>

                            <Container maxWidth="md" className={classes.boxContainer}>
                                <Box textAlign="right">
                                    <Button type="submit" variant="contained" color="primary">
                                        Publicar anúncio
                                    </Button>
                                </Box>
                            </Container>
                        </form>
                    )
                }
            }

            </Formik>

        </TemplateDefault>
    )
}

export default Publish