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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci provident debitis quam incidunt nisi rerum illo id impedit vel quasi ab, minima omnis sint tempore. Possimus accusantium ut fugiat earum magni laboriosam quia, quibusdam in suscipit ullam fugit, esse, magnam non deleniti harum doloremque qui alias ratione. Ipsum, fuga.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum, ratione ipsum esse aut vel quasi a quod explicabo hic.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Story