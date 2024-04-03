'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewItem from './NewItem'

function Dashboard() {
  const [data, setData] = useState<NewsArticle[] | null>([])
  const getData = async () => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=038cd23dd52447bd9fe172fe55cd4e75')
    setData(response.data.articles)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Dashboard</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, tempora quo in est expedita illum eaque voluptates commodi, sint ullam saepe! Adipisci laborum iure sit voluptates odio placeat eos debitis.</p>
      </div>
      {
        data && data?.map((item, index) => (
          <div>
            <NewItem
              item={item}
              key={index}
            />
          </div>
        ))
      }
    </>
  )
}

export default Dashboard