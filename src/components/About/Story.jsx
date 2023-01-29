import Img1 from '../../assets/story.webp'
const Story = () => {
  return (
    <div className="about-story">
      <h4 className="headline">
        our story
      </h4>
      <div className="grid">
      <div className="image">
          <img src={Img1} alt='stroy' />
        </div>
        <div className="text">
          <p>
            We started off as a social media management brand in 2018;
          </p>
          <br />
          <p>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Story