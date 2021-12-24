import {
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core'

import Card from '../../src/components/Card'

import { makeStyles } from '@material-ui/core'
import TemplateDfault from '../../src/templates/Default'
import dbConnect from '../../src/utils/dbConnect'
import {getSession} from 'next-auth/client'
import ProductsModel from '../../src/models/products'

const useStyles = makeStyles(() => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))

const Home = ({ products }) => {
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
        {
            products.map(product => {
              if (removedProducts.includes(product._id)) return null

              return (
                <Grid key={product._id} item xs={12} sm={6} md={4}>
                  <Card 
                    image={`/uploads/${product.files[0].name}`}
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                    actions={
                      <>
                        <Button size="small" color="primary">
                          Editar
                        </Button>
                        <Button size="small" color="primary" onClick= {() => handleClickRemove(product._id)}>
                          Remover
                        </Button>
                      </>
                    }
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </TemplateDfault>
  )
}

Home.requireAuth = true

export async function getServerSideProps ({req}) {

  const session = await getSession({req})
  await dbConnect()

  const products = await ProductsModel.find({ 'user.id': session.userId })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Home