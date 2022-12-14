import Welcome, { Props as welcomeProps } from '../../molecules/welcome/Welcome'
import Image, { Props as imagePros } from '../../atoms/imagen/Imagen'
import styles from './index.module.scss'
import Reloj from '../../atoms/reloj/Reloj'

export interface Props {
  welcomeProps: welcomeProps
  imagePros: imagePros
}

const Header = ({ imagePros, welcomeProps }: Props) => {
  return (
    <section className={styles.headerContent}>
      <div className={`${styles.header} container mb-1`}>
        <Image {...imagePros} />
        <div>
          <Reloj />
        </div>
        <Welcome {...welcomeProps} />
      </div>
    </section>
  )
}

export default Header
