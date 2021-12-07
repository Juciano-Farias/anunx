import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, Container, Menu } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: '6px'
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Link href="/" passHref>
            <Typography variant="h6" className={classes.title}>
              Anunx
            </Typography>
            </Link>
            <Link href="/user/publish" passHref>
              <Button color="inherit" variant="outlined">
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton color="secondary">
              {
                true === false
                 ? <Avatar src="" />
                 : <AccountCircle />
              }
              <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                Juciano Gomes
              </Typography>
            </IconButton>
            
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
