import React from "react"
import CustomerReview from "./sections/CustomerReview"
import Footer from "./sections/Footer"
import PopularProducts from "./sections/PopularProducts"
import SuperQuality from "./sections/SuperQuality"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import Subscribe from "./sections/Subscribe"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

export default function App() {
  return (
    <React.Fragment>
      <main className="relative">
        <Navbar />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className='padding'>
          <PopularProducts />
        </section>
        <section className='padding'>
          <SuperQuality />
        </section>
        <section className='padding-x py-10'>
          <Services />
        </section>
        <section className='padding'>
          <SpecialOffer />
        </section>
        <section className='bg-pale-blue padding'>
          <CustomerReview />
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe />
        </section>
        <section className=' bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>
      </main>
    </React.Fragment>
  )
}