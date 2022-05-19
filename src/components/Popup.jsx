import {useState, useEffect} from "react";
import Url from "./Url";

export default function Popup() {

  const [urls, setUrls] = useState([]);

  async function handleCopy(event) {
    const { dataset } = event.target;
    navigator.clipboard.writeText(dataset.url)
      .then(function () {
        alert(`${dataset.url} copied to clipboard`);
      }, function (err) {
        console.error('Could not copy text', err);
      })
   
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