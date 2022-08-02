import React from 'react'
import classNames from 'classnames'
import { extractClass } from '../../../../helpers/helpers'
import styles from './index.module.scss'

type Props = {
  type: string
  name: string
  id: string
  classname?: string
  onchange?: Function
  disabled?: boolean
  placeholder?: string
}

const Input = ({
  type,
  name,
  id,
  classname = '',
  onchange,
  disabled = false,
  placeholder = 'placeholder',
}: Props) => {
  const classprops: string = classNames(
    'form-control',
    extractClass(styles, classname)
  )

  return (
    <input
      id={id}
      type={type}
      name={name}
      className={classprops}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onchange}
    />
  )
}

export default Input
