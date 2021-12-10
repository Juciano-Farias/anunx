import {
    Box,
    Button,
    Container,
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

import TemplateDefault from '../../../src/templates/Default'

import useStyles from './styles';
import { initialValues, validationSchema } from './formValues'
import FileUpload from '../../../src/components/FileUpload';

const Publish = () => {
    const classes = useStyles() 

    return(
        <TemplateDefault>
            <Formik
                initialValues={initialValues}
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
                                    <FileUpload 
                                        files={values.files}
                                        errors={errors.files}
                                        touched={touched.files}
                                        setFieldValue={setFieldValue}
                                    />
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
                                                type="email"
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