import { Form } from 'react-bootstrap'
import Button from '../../atoms/button/Button'

const RecuperarButtons = () => {
  return (
    <>
      <Button
        type="button"
        classname="mb-3"
        variant="primary"
      >
        Nueva solicitud
      </Button>
      <Form.Check
        type={`checkbox`}
        id={`default-checkbox-check1`}
        label={`Mostrar sólo solicitudes pendientes`}
        name={'session'}
        className="mb-2 d-block"
      />
    </>
  )
}

export default RecuperarButtons
