import React from 'react'
import { FaStar } from 'react-icons/fa'


import Img1 from '../assets/offer1.png'
import Img2 from '../assets/graph.jpg'
import Img3 from '../assets/train.png'
import Img4 from '../assets/item4.jpeg'

const ServiceOffer = () => {
  const data = [{
    id: 1,
    image: Img1,
    name: 'trainings',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  {
    id: 2,
    image: Img2,
    name: 'courses',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id:3,
    image: Img3,
    name: 'coaching',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id: 4,
    image: Img4,
    name: 'consultation',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  }
  ]
  return (
    <div className="service-container">
      <section>
        <h4 className="headline">
          what we offer
        </h4>
        <article>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et perferendis, repudiandae, consectetur ipsa natus qui blanditiis eius autem eligendi odio incidunt, quisquam laborum porro distinctio recusandae possimus a tenetur iure inventore atque? Optio, numquam a doloremque labore possimus magni nisi, incidunt, rerum ad nam repellat eaque veniam itaque molestias. Cumque, eius. Sit possimus adipisci exercitationem, repellendus quas deleniti quibusdam excepturi atque provident quia. Tempore, quam nam! A optio quos aliquid dolore magnam eos velit provident architecto nobis repellat soluta aliquam dolor nisi ipsa saepe voluptate, consequuntur vitae placeat distinctio exercitationem vel quidem itaque? Laboriosam animi architecto numquam dolorum nemo officia!
          </p>
          <br />
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil quos repellat voluptas enim suscipit facilis totam tempore corporis recusandae iusto aspernatur, doloremque, debitis magnam ullam quidem hic corrupti ipsam iure ratione incidunt cumque. Inventore, praesentium. Numquam alias voluptatem ipsum.
          </p>
        </article>
        <article className='article'>
          <h4 className="headline">
            trainings
          </h4>
          <div className="grid">
            <div>
              <img src={Img3} alt="item" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe impedit earum neque exercitationem fugit quibusdam autem ratione inventore aperiam, dolore voluptatum distinctio perspiciatis esse nisi debitis sunt suscipit aut fugiat quidem reprehenderit accusantium natus. Voluptas assumenda, quas alias numquam, sint corrupti nesciunt commodi accusamus quos suscipit sapiente nam natus laborum blanditiis temporibus, ea aliquam! Perspiciatis eos asperiores quam quaerat quo. Dolore, doloribus consequatur neque quaerat quidem temporibus, vitae fugit doloremque illo rem explicabo optio nam in ipsa nihil eaque.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, mollitia. Doloremque optio consequatur accusamus! Quibusdam recusandae qui voluptates delectus optio tenetur perspiciatis, nobis vitae magnam dolor, iure corrupti autem dolores!
              </p>
            </div>
          </div>
        </article>
        <article className='article'>
          <h4 className="headline">
            courses
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit aliquam, aliquid vitae dolores iusto, quidem dicta debitis, molestias id temporibus vel qui sed reiciendis culpa cum cumque tempora natus quas dignissimos impedit provident? A, possimus sunt, ipsam pariatur expedita facere excepturi beatae accusantium aut nobis corporis officia, deleniti harum.
          </p>
          <div className="courses-cont">
            <div className="wrap">
              {
                data.map(item => {
                  return <div className="item" key={item.id}>
                    <img src={Img2} alt="item" />
                    <div className="text">
                      <h4>
                        Growth Strategy And Business Model
                      </h4>
                      <div className="flex">
                        <p>
                          <FaStar />
                        </p>
                        <p>
                          4.5 (126)
                        </p>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </article>
        <article  className='article'>
          <h4 className="headline">
            coaching
          </h4>
          <div className="grid">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe impedit earum neque exercitationem fugit quibusdam autem ratione inventore aperiam, dolore voluptatum distinctio perspiciatis esse nisi debitis sunt suscipit aut fugiat quidem reprehenderit accusantium natus. Voluptas assumenda, quas alias numquam, sint corrupti nesciunt commodi accusamus quos suscipit sapiente nam natus laborum blanditiis temporibus, ea aliquam! Perspiciatis eos asperiores quam quaerat quo. Dolore, doloribus consequatur neque quaerat quidem temporibus, vitae fugit doloremque illo rem explicabo optio nam in ipsa nihil eaque.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, mollitia. Doloremque optio consequatur accusamus! Quibusdam recusandae qui voluptates delectus optio tenetur perspiciatis, nobis vitae magnam dolor, iure corrupti autem dolores!
              </p>
            </div>
            <div>
              <img src={Img1} alt="courses" />
            </div>
          </div>
        </article>
        <article className='article'>
          <div className='grid'>
            <div>
              <img src={Img4} alt='offer' /> 
            </div>
            <div>
              <h4 className="headline">
                consultation
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe impedit earum neque exercitationem fugit quibusdam autem ratione inventore aperiam, dolore voluptatum distinctio perspiciatis esse nisi debitis sunt suscipit aut fugiat quidem reprehenderit accusantium natus. Voluptas assumenda, quas alias numquam, sint corrupti nesciunt commodi accusamus quos suscipit sapiente nam natus laborum blanditiis temporibus, ea aliquam! Perspiciatis eos asperiores quam quaerat quo. Dolore, doloribus consequatur neque quaerat quidem temporibus, vitae fugit doloremque illo rem explicabo optio nam in ipsa nihil eaque.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, mollitia. Doloremque optio consequatur accusamus! Quibusdam recusandae qui voluptates delectus optio tenetur perspiciatis, nobis vitae magnam dolor, iure corrupti autem dolores!
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default ServiceOffer