import { storiesOf } from '@storybook/react'
import SolMarcaButtons from './SolMarcaButtons'
import styles from './solMarcaButtons.module.scss'

const defaultStyle = {
  outline: '1px solid #bebec2',
  backgroundColor: '#f0f1f5',
  borderRadius: '2px',
}

storiesOf('Molecules/SolMarcaButtons', module)
  .addDecorator((Story) => (
    <div style={{ height: '600px' }}>
      <div
        className={styles.header}
        style={defaultStyle}
      >
        <div
          className={styles.content}
          style={defaultStyle}
        >
          <div
            className={styles.headerContent}
            style={defaultStyle}
          >
            <div style={defaultStyle}>
              <img src="https://via.placeholder.com/150x76" />
            </div>
            <div style={defaultStyle}>[ HOY 07/06/2022 16:22:33 ]</div>
            <div style={defaultStyle}>Login</div>
          </div>
        </div>

        <div
          className={styles.navbr}
          style={defaultStyle}
        >
          <div
            className={styles.content}
            style={defaultStyle}
          >
            nav
          </div>
        </div>
      </div>
      <Story />
      <div
        className={styles.footer}
        style={defaultStyle}
      >
        <div
          className={styles.content}
          style={defaultStyle}
        >
          <div className={styles.contentFooter}>texto footer</div>
        </div>
      </div>
    </div>
  ))
  .add('SolMarcaButtons', () => <SolMarcaButtons />)
