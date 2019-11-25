import React from 'react'
import { Formik, Field } from 'formik'
import { StyledField } from './NewStyled'

export const New = () => {
  return (
    <div>
      <Formik 
        initialValues={{
          name: '',
          description: '',
        }}
      >
        {
          ({ handleSubmit, values, dirty }) => (
            <form onSubmit={handleSubmit}>
              <StyledField name="name" placeholder="Type task name..." value={values.name} />
              <StyledField placeholder="Type task description..." name="description" value={values.description} />
              <button>CANCEL</button>
              <button disabled={!dirty}>ADD</button>
            </form>
          )
        }
      </Formik>
    </div>
  )
}
