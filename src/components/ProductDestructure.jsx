import React from 'react'

const ProductDestructure = ({ student, subject, score }) => {
  return (
    <div>
        <h1>{student}</h1>
        <p>{subject}</p>
        <p>{score}</p>
    </div>
  )
}
ProductDestructure.defaultProps = {
    student: "Anonymous",
    subject: "Nill",
    score: 0,
  }

export default ProductDestructure