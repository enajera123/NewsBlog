import React, { useEffect } from 'react'

function NewItem({ item }: { item: NewsArticle }) {

  useEffect(() => {
    console.log(item)
  }, [])
  return (
    <div>{item.author }</div>
  )
}

export default NewItem