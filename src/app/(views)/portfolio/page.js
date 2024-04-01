import React from 'react'
import Portfolio from './Portfolio'

const data = [
  {
    id: 1,
    src: "portfolio-1.jpeg",
    text: "Жилые интерьеры",
    href: "/live-interier",
  },
  {
    id: 2,
    src: "portfolio-2.jpeg",
    text: "Общественные интерьеры",
    href: "/communal-interier",
  },
  {
    id: 3,
    src: "portfolio-3.jpeg",
    text: "Архитектурные проекты",
    href: "/architectural-projects",
  },
];

const page = () => {
  return (
    <div>
      <Portfolio data = { data }/>
    </div>
  )
}

export default page