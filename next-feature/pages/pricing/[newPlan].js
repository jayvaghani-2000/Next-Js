import React from 'react'
import { useRouter } from 'next/router'

const NewPlan = () => {
  const router = useRouter()
  const page = router.query.newPlan

  return (
    <div>{page}</div>
  )
}

export default NewPlan