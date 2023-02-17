import {BsGlobe, BsLightbulb} from 'react-icons/bs'


const AboutVision = () => {
  return (
    <div className="about-vision">
      <section>
        <div className="grid">
          <div className="item">
            <div className="svg">
              <BsGlobe />
            </div>
            <h5 className="tophead">
              our mission
            </h5>
            <p>
            To design strategies that promotes sustainable businesses, globally.
            </p>
          </div>
          <div className="item">
            <div className="svg">
              <BsLightbulb />
            </div>
            <h5 className="tophead">
              our vision
            </h5>
            <p>
              To be the most referred consulting firm for small businesses in Africa.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutVision