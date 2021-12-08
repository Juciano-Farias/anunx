import {
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core'

import Card from '../../src/components/Card'

import { makeStyles } from '@material-ui/core'
import TemplateDfault from '../../src/templates/Default'

const useStyles = makeStyles(() => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))

export default function Home() {
  const classes = useStyles()

  return (
    <TemplateDfault>
      <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center">
        Meus Anúncios 
      </Typography>
      <Button variant="contained" color="primary" className={classes.buttonAdd}>
        Publicar novo anúncio
      </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} >
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$: 60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Card 
                image={'https://source.unsplash.com/random'}
                title="Produto X"
                subtitle="R$: 60,00"
                actions={
                  <>
                    <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                  </>
                }
              />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Card 
                image={'https://source.unsplash.com/random'}
                title="Produto X"
                subtitle="R$: 60,00"
                actions={
                  <>
                    <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                  </>
                }
              />
          </Grid>
        </Grid>
      </Container>
    </TemplateDfault>
  )
}
