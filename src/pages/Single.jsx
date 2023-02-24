import React, { useEffect, useState } from 'react'
import {  useParams} from 'react-router-dom'
import {client, urlFor} from '../lib/client'
import BlockContent from '@sanity/block-content-to-react'
import Moment from 'moment'
import Helmet from 'react-helmet'



const Single = () => {
  const [single, setSingle] = useState(null);
  const {slug} = useParams();

  const fetchSingleData = async () => {
    const query = `*[slug.current == "${slug}"]`;
    const post = await client.fetch(query);
    setSingle(post);

  }
  useEffect(() => {
    fetchSingleData();
  })




  return (
    <div className='single-page'>
      <section>
        <article>
          {
            single && single.map(item => {
              const formatDate = Moment(item.date).format("MMM Do, YYYY.")

              return (
                <article className="single-container" key={item.slug}>
                        <Helmet>
                        <title>
                          Gold Sycamore | {item.title}
                        </title>
                      </Helmet>
                    <h6 className='grey'>
                    Posted on  {formatDate}
                    </h6>
                    <h4 className='headline'>
                      {item.title}
                    </h4>
                  <div className="center">
                    <div className="image">
                      {item.mainImage && 
                        <img src={urlFor(item.mainImage )} alt={item.title} />
                      }
                    </div>
                  </div>
                  <div>
                    <h6 className='author'>
                      by  Ukusare Faith 
                    </h6>

                  </div>
                  <br />
                  <article>
                    <BlockContent 
                      blocks={item.body}
                      projectId="ww69fva0"
                      dataset="production"
                    />
                  </article>
                </article>
              )
            })
          }
        </article>
      </section>
    </div>
  )
}

export default Single