import millify from "millify";
import { useNavigate } from "react-router-dom";


const VideoCard = ({ video, type }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/watch/${video.videoId}`)}
      className={`cursor-pointer ${type === "row" ? "row" : (type === "search-row" ? "search-row" : "")}`} >
      {/* resim kısmı */}
      <div>
        <img
          className={`rounded-lg w-full h-full`}
          src={video.thumbnail[0].url}
        />
      </div>
      {/* alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className={`w-14 h-14 rounded-full ${type && "hidden"}`}
          src={video.channelThumbnail[0]?.url}
        />
        <div>
          <h4 className={`font-bold ${type === "row" && "truncate w-[350px]"}`}>{video?.title}</h4>
          <p>{video?.channelTitle}</p>
          <div className="flex gap-2">
            <p>{millify(video.viewCount)} görüntülenme</p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;