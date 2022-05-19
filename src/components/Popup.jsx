import {useState, useEffect} from "react";
import Url from "./Url";

export default function Popup() {

  const [urls, setUrls] = useState([]);

  console.log(urls);

  useEffect(() => {
    fetch("https://jqq-utils.netlify.app/api/recentYTVideos")
        .then(res => res.json())
        .then(data => setUrls(data))
}, [])

const videosEl = urls.map(video => {
  return(
    <Url 
      key={video.videoId} 
      videoId={video.videoId}
      videoTitle={video.title}
      />
  )
})


  return(
    <>
      <ol id="urlsList">
        {videosEl}
      </ol>
    </>
  )
}