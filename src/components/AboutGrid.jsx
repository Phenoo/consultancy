import React from 'react'
import { FaSchool,   FaPeace, FaUserAlt } from 'react-icons/fa'
import { MdModelTraining } from 'react-icons/md'

const AboutGrid = () => {
  const data = [{
    id: 1,
    icon: <FaUserAlt />,
    name: 'trainings',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  {
    id: 2,
    icon: <FaSchool />,
    name: 'courses',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id:3,
    icon: <FaPeace />,
    name: 'coaching',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id: 4,
    icon: <MdModelTraining />,
    name: 'consultation',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  ]
  return (
    <div className="about-grid">
      <div className="header">
        <h4 className="headline">
          why work with us ?
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed reiciendis eum. <br/> Provident sapiente molestias animi ut aspernatur exercitationem.
        </p>
      </div>
      <div className="fourgrid">
        {
          data.map(item => {
            return (
              <div className="item" key={item.id}>
                <div className="svg">
                  {item.icon}
                </div>
                <h4>
                  {item.name}
                </h4>
                <p>
                  {item.desc}
                </p>
              </div>
          )
          })
        }
      </div>
      <button className="button">
        get started
      </button>
    </div>
  )
}

export default AboutGrid