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

        <Card id={cards[0].id} weblogo={cards[0].weblogo} coursename={cards[0].coursename} para={cards[0].para} />
        <Card id={cards[1].id} weblogo={cards[1].weblogo} coursename={cards[1].coursename} para={cards[1].para} />
        <Card id={cards[2].id} weblogo={cards[2].weblogo} coursename={cards[2].coursename} para={cards[2].para} />
        <Card id={cards[3].id} weblogo={cards[3].weblogo} coursename={cards[3].coursename} para={cards[3].para} />
        <Card id={cards[4].id} weblogo={cards[4].weblogo} coursename={cards[4].coursename} para={cards[4].para} />
        <Card id={cards[5].id} weblogo={cards[5].weblogo} coursename={cards[5].coursename} para={cards[5].para} />
        <Card id={cards[6].id} weblogo={cards[6].weblogo} coursename={cards[6].coursename} para={cards[6].para} />
        <Card id={cards[7].id} weblogo={cards[7].weblogo} coursename={cards[7].coursename} para={cards[7].para} />
        <Card id={cards[8].id} weblogo={cards[8].weblogo} coursename={cards[8].coursename} para={cards[8].para} />
        <Card id={cards[9].id} weblogo={cards[9].weblogo} coursename={cards[9].coursename} para={cards[9].para} />
        <Card id={cards[10].id} weblogo={cards[10].weblogo} coursename={cards[10].coursename} para={cards[10].para} />
        <Card id={cards[11].id} weblogo={cards[11].weblogo} coursename={cards[11].coursename} para={cards[11].para} />
        <Card id={cards[12].id} weblogo={cards[12].weblogo} coursename={cards[12].coursename} para={cards[12].para} />
        <Card id={cards[13].id} weblogo={cards[13].weblogo} coursename={cards[13].coursename} para={cards[13].para} />
        <Card id={cards[14].id} weblogo={cards[14].weblogo} coursename={cards[14].coursename} para={cards[14].para} />
        <Card id={cards[15].id} weblogo={cards[15].weblogo} coursename={cards[15].coursename} para={cards[15].para} />
        <Card id={cards[16].id} weblogo={cards[16].weblogo} coursename={cards[16].coursename} para={cards[16].para} />
        <Card id={cards[17].id} weblogo={cards[17].weblogo} coursename={cards[17].coursename} para={cards[17].para} />
        <Card id={cards[18].id} weblogo={cards[18].weblogo} coursename={cards[18].coursename} para={cards[18].para} />
        <Card id={cards[19].id} weblogo={cards[19].weblogo} coursename={cards[19].coursename} para={cards[19].para} />
        <Card id={cards[20].id} weblogo={cards[20].weblogo} coursename={cards[20].coursename} para={cards[20].para} />
        <Card id={cards[21].id} weblogo={cards[21].weblogo} coursename={cards[21].coursename} para={cards[21].para} />

      </div>

      <Footer/>
    </>
  )
}

export default App