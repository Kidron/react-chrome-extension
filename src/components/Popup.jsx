import {useState, useEffect} from "react";
import Url from "./Url";

export default function Popup() {

  const [urls, setUrls] = useState([]);

  function handleCopy(event) {
    const { dataset } = event.target;
    navigator.clipboard.writeText(dataset.url);
    alert(`${dataset.url} copied to clipboard`);
  }

  useEffect(() => {
    fetch("https://jqq-utils.netlify.app/api/recentYTVideos")
        .then(res => res.json())
        .then(data => setUrls(data))
}, [])

  return(
    <>
      <ol id="urlsList">
        {urls.map(video => {
          return(
          <Url 
            key={video.videoId} 
            videoId={video.videoId}
            videoTitle={video.title}
            videoCopy={handleCopy}
          />
            )
        })}
      </ol>
    </>
  )
}