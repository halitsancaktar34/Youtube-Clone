import { useContext } from "react"
import SideBar from "../components/SideBar"
import { YoutubeContext } from "../context/youtubeContext"
import VideoCard from './../components/VideoCard';
import Loading from "../components/Loading";


const Feed = () => {
  const {videos} = useContext(YoutubeContext);
  return (
    <div>
      <div className="flex gap-3">
        {<SideBar />}
        <div className="videos">
          {!videos ? (<Loading type={"video"}/>) : (
            videos.map(
              (item) => 
               item.type === "video" && (<VideoCard video={item} key={item.videoId}/>)))
        }
        </div>
        </div>
      </div>

  )
}

export default Feed