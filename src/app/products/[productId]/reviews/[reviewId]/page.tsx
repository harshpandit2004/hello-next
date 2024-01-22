import React from 'react'

export default function SpecificProductReviewPage({params}: {
    params: {
        reviewId: string,
        productId: string
    }
}) {
  return (
    <div>
      review {params.reviewId} about product {params.productId} 
    </div>
  )
}
