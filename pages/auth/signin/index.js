import Image from 'next/image'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { signIn, useSession }  from 'next-auth/react'

import {
    Box,
    Container,
    Typography,
    FormControl,
    InputLabel,
    FormHelperText,
    Input,
    Button,
    CircularProgress
} from '@material-ui/core'

import { Alert } from '@material-ui/lab';

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import useToasy from '../../../src/contexts/Toasty'
import useStyles from './styles'

const Signin = ({ APP_URL }) => {
    const classes = useStyles()
    const router = useRouter()
    const { setToasty } = useToasy()
    const { data: session, status } = useSession()
    
    console.log(session)
    
    const handleFormSubmit = async (values) => {
        await signIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: `${APP_URL}:3000/user/dashboard`
        })

    }

    const handleGoogleLogin = () => {
        signIn('google', {
            callbackUrl: `${APP_URL}:3000/user/dashboard`
        })
    }

    
    return(
        <TemplateDefault>
            <Container maxWidth="sm" component="main" className={classes.container}>
                <Typography component="h2" variant="h2" align="center" color="textPrimary">
                    Entre na sua conta
                </Typography>
            </Container>

            <Container maxWidth="md">
                <Box className={classes.box}>

                    <Box display="flex" justifyContent="center">
                        <Button 
                            variant="contained"
                            color="primary"
                            startIcon={
                                <Image 
                                    src="/images/logo_google.svg" 
                                    width={20} 
                                    height={20} 
                                    alt="Login com o google"
                                />
                            }
                            onClick={handleGoogleLogin}
                        >
                            Entrar com o Google
                        </Button>
                    </Box>

                    <Box className={classes.orSeparator}>
                        <span>ou</span>
                    </Box>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                            }) => {
                                return(
                                    <form onSubmit={handleSubmit}>
                                        {
                                            router.query.i === '1'
                                            ?   (
                                                <Alert color='error' severity='error' className={classes.errorMessage}>
                                                    Usuário ou senha inválidos
                                                </Alert>
                                            )
                                            : null
                                        }
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

                                        <FormControl error={errors.password && touched.password} fullWidth>
                                        <InputLabel className={classes.inputLabel}>Senha</InputLabel>
                                            <Input 
                                                name="password"
                                                type='password'
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                        <FormHelperText>
                                            { errors.password && touched.password ? errors.password : null }
                                        </FormHelperText>
                                    </FormControl>

                                    {
                                        isSubmitting 
                                            ?   <CircularProgress className={classes.loading} />
                                            :   <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                >
                                                    Entrar
                                                </Button>
                                        
                                    }

                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

Signin.getInitialProps = async function() {
    return {
        APP_URL: process.env.APP_URL
    }
}

export default Signin