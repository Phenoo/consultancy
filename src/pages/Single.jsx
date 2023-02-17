import React, { useEffect, useState } from 'react'
import {  useParams} from 'react-router-dom'
import {client, urlFor} from '../lib/client'
import BlockContent from '@sanity/block-content-to-react'
import Moment from 'moment'

import Comment from '../components/Comment'

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
                  <div className="center">
                    <h4 className='headline'>
                      {item.title}
                    </h4>
                  </div>
                  <div className="center">
                    <div className="image">
                      {item.mainImage && 
                        <img src={urlFor(item.mainImage )} alt={item.title} />
                      }
                    </div>
                  </div>
                  <div>
                    <h6 className='author'>
                      {item.author.name} 
                    </h6>
                    <h6 className='grey'>
                      {formatDate}
                    </h6>
                  </div>
                  <br />
                  <article>
                    <BlockContent 
                      blocks={item.body}
                      projectId="8csevbsr"
                      dataset="production"
                    />
                  </article>
                </article>
              )
            })
          }
        </article>
        <Comment />
      </section>
    </div>
  )
}

export default Single