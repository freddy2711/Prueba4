import { Form } from 'react-bootstrap'
import styles from './BotonesAsistencia.module.scss'

const BotonesAsistencia = () => {
  return (
    <div className={styles.btnAsistencia}>
      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio1`}
        label={`A`}
        name={'asistencia'}
      />

      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio2`}
        label={`T`}
        name={'asistencia'}
      />

      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio3`}
        label={`F`}
        name={'asistencia'}
      />
      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio4`}
        label={`N`}
        name={'asistencia'}
      />
    </div>
  )
}

export default BotonesAsistencia
