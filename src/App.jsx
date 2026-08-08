import React from 'react'
import Home from './Home'
import Card from './Card'
import './App.css'
import Footer from './Components/Footer'

export const cards = [
  {
    id: 1,
    weblogo: "/public/Images/Phoenix.webp",
    coursename: "Phoenix",
    para: "A sleek Bootstrap dashboard built for modern projects"
  },
  {
    id: 2,
    weblogo: "/public/Images/Phoenix.webp",
    coursename: "Phoenix React",
    para: "The leading React-powered admin template with style & speed"
  },
  {
    id: 3,
    weblogo: "/public/Images/falcon.webp",
    coursename: "Falcon",
    para: "A versatile Bootstrap dashboard designed for growth"
  },
  {
    id: 4,
    weblogo: "/public/Images/freya.webp",
    coursename: "Falcon React",
    para: "A powerful React dashboard with optimized performance & modular code"
  },
  {
    id: 5,
    weblogo: "/public/Images/sparrow.webp",
    coursename: "Sparrow",
    para: "A clean, creative Bootstrap template for any website idea"
  },
  {
    id: 6,
    weblogo: "/public/Images/slick.webp",
    coursename: "slick",
    para: "Drag & Drop Bootstrap Template Generator"
  },
  {
    id: 7,
    weblogo: "/public/Images/posh.gif",
    coursename: "posh",
    para: "A Revolutionary New Way of Creatin Websites"
  },
  {
    id: 8,
    weblogo: "/public/Images/freya.webp",
    coursename: "Freya",
    para: "Interior Design Agency Template"
  },
  {
    id: 9,
    weblogo: "/public/Images/nirvana.webp",
    coursename: "nirvana",
    para: "Interactive Bootstrap 4 Template"
  },
  {
    id: 10,
    weblogo: "/public/Images/Hideway.webp",
    coursename: "hideaway",
    para: "Luxury Inn & HTML5 Website Template"
  },
  {
    id: 11,
    weblogo: "/public/Images/baikal.webp",
    coursename: "Baikal",
    para: "HTML5 Bootstrap 4 Template for Startups & Business website"
  },
  {
    id: 12,
    weblogo: "/public/Images/shape.webp",
    coursename: "Shape",
    para: "Bootstrap 4 mobile and web app landing page template"
  },
  {
    id: 13,
    weblogo: "/public/Images/boots5.webp",
    coursename: "Boots5",
    para: "A Bootstrap 5 template with responsive features & alluring color palette."
  },
  {
    id: 14,
    weblogo: "/public/Images/elixir.webp",
    coursename: "Boots5",
    para: "A Bootstrap 5 template with responsive features & alluring color palette."
  },
  {
    id: 15,
    weblogo: "/public/Images/boots4.webp",
    coursename: "Boots4",
    para: "First-Ever Bootstrap 4 Template"
  },
  {
    id: 16,
    weblogo: "/public/Images/posh.gif",
    coursename: "Grid",
    para: "Grid is a beautifully created professional theme with the latest trend."
  },
  {
    id: 17,
    weblogo: "/public/Images/restaurant2.webp",
    coursename: "resturant pro",
    para: "Elegant Resturant website Template"
  },
  {
    id: 18,
    weblogo: "/public/Images/spin-1.webp",
    coursename: "Spin",
    para: "Premium Quality high-performing landing HTML5 Template"
  },
  {
    id: 19,
    weblogo: "/public/Images/raven-pro.webp",
    coursename: "Raven pro",
    para: "Responsive Bootstrap 4 Legal Agency Website Template"
  },
  {
    id: 20,
    weblogo: "/public/Images/medicare1.webp",
    coursename: "Medicare",
    para: "Medical Hospital Responsive Templates with HTML5 and Bootstrap4"
  },
  {
    id: 21,
    weblogo: "/public/Images/conference-ii.webp",
    coursename: "Conference Pro",
    para: "Responsive Event Planning HTML5 Template"
  },
  {
    id: 22,
    weblogo: "/public/Images/elixir.webp",
    coursename: "elixir",
    para: "HTML5 Bootstrap4 template for Agency Website"
  },
]

const App = () => {
  return (
    <>
      <Home />
      <div className="cards-components">

        {
          cards.map((item, index) => (
            <Card key={index} products={item} />
          ))
        }


      </div>

      <Footer />
    </>
  )
}

export default App