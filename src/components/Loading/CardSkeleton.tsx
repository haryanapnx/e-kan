import React from 'react'
import { Skeleton } from 'antd';

interface Props {
  count?: number
}
const CardSkeleton: React.FC<Props> = ({ count = 5 }) => {

  let counts = []
  for (let i = 0; i < count; i++) {
    counts.push(i)
  }

  return (
    <React.Fragment>
      {counts.map(key => (
        <Skeleton key={key} active />
      ))}
    </React.Fragment>
  )
}

export default CardSkeleton;