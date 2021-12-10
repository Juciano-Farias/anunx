import {
    Box,
    IconButton,
    Typography
} from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { useDropzone } from 'react-dropzone'

import useStyles from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {
    const classes = useStyles()

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (accepedtFile) => {

            const newFiles = accepedtFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            }) 

            setFieldValue('files', [
                ...files,
                ...newFiles
            ])
        }
    })

    const handleRemoveFile = (fileName) => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFieldValue('files', newFileState)
    }

    return(
        <>
            <Typography component="h6" variant="h6" color={errors && touched ? "error" : "textPrimary"}>
                Imagens
            </Typography>
            <Typography component="div" variant="body2" color={errors && touched ? "error" : "textPrimary"}>
                A primeira imagem é a foto principal do anúncio.
            </Typography>
            {
                errors && touched
                ? <Typography variant="body2" color="error">{errors && touched}</Typography>
                : null
            }
            <Box className={classes.thumbsContainer}>
                <Box className={classes.dropzone} {...getRootProps()}>
                    <input name="files" {...getInputProps()} /> 
                <Typography variant="body2" color={errors ? "error" : "textPrimary"}>
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
        </>
        
    )
}

export default FileUpload