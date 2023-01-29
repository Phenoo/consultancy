import {BsGlobe} from 'react-icons/bs'


const AboutVision = () => {
  return (
    <div className="about-vision">
      <section>
        <h4 className="headline">
          about gold sycamore
        </h4>
        <div className="grid">
          <div className="item">
            <div className="svg">
              <BsGlobe />
            </div>
            <h5 className="tophead">
              our mission
            </h5>
            <p>
              To arm business owners with strategies that promote sustainable businesses, globally. 
            </p>
          </div>
          <div className="item">
            <div className="svg">
              <BsGlobe />
            </div>
            <h5 className="tophead">
              our vision
            </h5>
            <p>
              To be the most preferred consulting firm for small businesses in Africa.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutVision