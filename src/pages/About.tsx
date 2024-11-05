import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <>
        <Navbar />
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Boots</h1>
              <p className="py-6">
                We seem them. And they're good.
              </p>
              <Link to="/store" className="btn btn-primary">Buy</Link>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

// export default About