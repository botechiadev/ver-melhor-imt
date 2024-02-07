import React, { useState } from 'react'

export default function useForm({initialForm = {}}) {

    const [formState, setFormState] = useState(initialForm)

    const handleOnChangeInput = ({target})=>{
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleClearForm = (e)=>{
        e.preventDefault()
        setFormState(initialForm)
    }

  return (

      {
        formState,
        handleOnChangeInput,
        handleClearForm
      }

  )
}
