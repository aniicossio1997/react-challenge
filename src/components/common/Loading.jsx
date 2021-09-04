import React from 'react'

const Loading = () => {
  return (
    <div className="container text-center mt-5">
      <div class="spinner-border text-primary mt-5"
        style={
          {
            height: "80px",
            width: "80px"
          }
        }
        role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <h1>Loading ...</h1>
    </div>
  )
}

export default Loading
