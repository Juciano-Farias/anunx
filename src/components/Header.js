import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Avatar, Container, Divider, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { signOut, singOut, useSession } from 'next-auth/react'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headButton:{
    marginRight: '10px',
  },
  userName: {
    marginLeft: '8px'
  },
  divider: {
    margin: '8px 0'
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const { data: session, status } = useSession()

  const openUserMenu = Boolean(anchorUserMenu)

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
            <Link href={session ? '/user/publish' : '/auth/signin'} passHref>
              <Button color="inherit" variant="outlined" className={classes.headButton}>
                Anunciar e Vender
              </Button>
            </Link>
            {
              session
              ? (
              <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                {
                  session.user.image
                  ? <Avatar src={session.user.image} />
                  : <AccountCircle />
                }
                <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                  {session.user.name}
                </Typography>
              </IconButton>
              )
              : null
            }

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              getContentAnchorEl={null}
              anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
              transformOrigin={{vertical: 'top', horizontal: 'center'}}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem onClick={() => {signOut({
                callbackUrl: '/'
                })}}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
