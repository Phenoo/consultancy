import React from 'react'
import Helmet from 'react-helmet'
import ServiceHome from '../components/ServiceHome'
import ServiceOffer from '../components/ServiceOffer'

const ServicePage = () => {
  return (
    <div className="service-page">
      <Helmet>
        <title>
          Gold Sycamore | Services
        </title>
      </Helmet>
      <ServiceHome />
      <ServiceOffer />
    </div>
  )
}

export default ServicePage