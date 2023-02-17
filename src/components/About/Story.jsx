import Img1 from '../../assets/story.webp'
const Story = () => {
  return (
    <div className="about-story">
      <div className="grid">
      <div className="image">
          <img src={Img1} alt='stroy' />
        </div>
        <div className="text">
          <h4 className="headline">
          our story
          </h4>
          <p>
          When we work together to provide your business solutions, we are not attempting to alter the norm. In reality, we guarantee that the business objectives are successfully carried out.
          </p>
          <br />
          <p>
          Although this served our clients for a while, we ultimately came to the conclusion that successful businesses needed more than just appealing social media pages.
          </p>
          <br />
          <p>
          So, we changed directions.
          </p>
          <br />
          <p>
          We remodeled our company in August 2021 to better serve this deep-sated goal of ours to support small businesses.
          </p>
          <br />
          <p>
          Businesses often hit roadblocks that need fixing. From our experience, our clients frequently faced more obstacles than they are aware of. Before proposing the precise solutions needed, we first understand the business’s core needs and underlying difficulties.
          </p>
          <br />
          <p>
          Our methods are simple yet effective.
          </p>
          <br />
          <p>
          We put a lot of effort into making sure that our clients understand what their businesses do, are well-equipped to articulate their values and then provide outstanding client services to their own customers.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Story