import React from 'react'

export default function SpecificProductPage({params}: {
    params: {
        productId: string
    }
}) {
  return (
    <div>
      Product Details:<br/>
      {params.productId}
    </div>
  )
}
