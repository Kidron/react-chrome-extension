export default function Url(props) {
  const videoUrl = `https://www.youtube.com/watch?v=${props.videoId}`;

  return (
    <>
    <li className="video-link">
    <button class="btn" data-url={videoUrl}>Copy URL</button>
    <a class="btn" href={videoUrl} rel="noopener noreferrer" target="_blank">Watch</a>
    {props.videoTitle}
    </li>
    </>
  )
}