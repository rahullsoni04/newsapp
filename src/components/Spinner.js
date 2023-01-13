import React from 'react'
import loading from '../loading.gif'; 

function Spinner() {
  return (
    <>
      <div className="my-3 container text-center">
          <img className = "my-4" src={loading} alt="loading" />
      </div>
    </>
  )
}

export default Spinner
