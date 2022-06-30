import React from 'react'

import { useSelector } from 'react-redux/es/exports'

const Notification = () => {
  const message = useSelector((state) => state.message.value)

  if (message === null) {
    return null
  }

  return <div>{message}</div>
}

export default Notification
