import React from 'react'
import { useRouter } from 'next/router'

const newPlan = () => {
  const router = useRouter()
  const page = router.query.newPlan

  return (
    <div>{page}</div>
  )
}

export default newPlan