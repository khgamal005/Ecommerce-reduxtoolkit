import React from 'react'

const Loading = ({children ,error,loading}) => {
  return (
    <div>{loading?'please wait':error? error :children }</div>
  )
}

export default Loading