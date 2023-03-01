import React, {useState} from 'react'
import ServiceModal from '../ServiceModal'

const ServiceHome = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="home service-home">
      <section>
        <div className="home-text">
          <h2>
          Either you focus on your competitors or you focus on YOU!
          </h2>
          <p>
          </p>
          <button className="button" onClick={() => setModal(!modal)}>
            book now
          </button>
        </div>
      </section>
      {modal && <ServiceModal setModal={setModal} modal={modal} />}

    </div>
  )
}

export default ServiceHome