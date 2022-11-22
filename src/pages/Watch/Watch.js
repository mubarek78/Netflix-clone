import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import YouTube from "react-youtube"
import "./watch.css";

export default function Watch() {
    const { trailerUrl } = useSelector((state) => state.url);
    {trailerUrl && console.log(trailerUrl)}

    const opts = {
        height: "140px",
        width: "100%",
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute: 1,
            loop: 1
        }
      }

      
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {trailerUrl && <YouTube  className="video" videoId={trailerUrl} opts={opts} />}
      {/* <video className="video" autoPlay progress controls src={movie.video} /> */}
    </div>
  );
}