import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <img
        width="100%"
        src="https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/full_stack/hero_image-6d2af04d8ff26b2334e0f866b3e3671b8c5e32fca0f4883c2e6a35248e36d77d.svg"
        alt=""
      />
      <div className="info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFN7qPxIUpWxV8s8Qdu6ti9fEjVgQdKEJsZg&usqp=CAU"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          delectus quos nisi nemo voluptas, ducimus asperiores dolor modi fugit
          suscipit facilis sed earum vitae quia incidunt exercitationem
          excepturi, quae possimus?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
