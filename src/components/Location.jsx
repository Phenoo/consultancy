import React from 'react'
import {GoLocation} from 'react-icons/go'

import Img1 from '../assets/map.png'

const Location = () => {
  return (
    <div>
      <div className="grid">
        <div>
          <h4 className="headline">
            our location
          </h4>
          <div className="location">
            <span>
              <GoLocation />
            </span>
            <span>
              <h6>
                Lekki, 21 Pitt Street, Auckland 1010, Australia, QLD 4006.
              </h6>
            </span>
          </div>
        </div>
        <div>
          <img src={Img1} alt='map' />
        </div>
      </div>
    </div>
  )
}

export default Location