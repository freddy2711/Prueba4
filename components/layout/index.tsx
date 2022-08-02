// import Header from './../UI/organisms/header/Header'
import Footer from './../UI/organisms/footer/Footer'
import Navigation from './../UI/molecules/navigation/Navigation'
import { Fragment, ReactNode } from 'react'
import { menuDefault } from './../../consts/menu'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./../UI/organisms/header/Header'), {
  ssr: false,
})

interface Props {
  children: ReactNode
}

const index = ({ children }: Props) => {
  const imagePros = {
    src: 'https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png',
    alt: 'test',
    classname: 'logoHeader',
  }

  const welcomeProps = {
    labelWelcome: {
      children: 'Bienvenido Profesor(a): VILLAR',
      classname: 'badge bg-light text-dark mb-2',
    },
    anchorDatPer: {
      href: '/datos-personales',
      children: 'Datos Personales',
      classname: 'badge bg-info text-white text-decoration-none me-1',
    },
    anchorLogout: {
      href: '#',
      children: 'Salir del Sistema',
      classname: 'badge bg-danger text-white text-decoration-none',
    },
    classname: 'text-center text-md-end',
  }

  return (
    <Fragment>
      <Header
        imagePros={imagePros}
        welcomeProps={welcomeProps}
      />
      <Navigation menu={menuDefault} />
      {children}
      <Footer />
    </Fragment>
  )
}

export default index
