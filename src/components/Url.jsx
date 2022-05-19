export default function Url(props) {
  const videoUrl = `https://www.youtube.com/watch?v=${props.videoId}`;

  return (
    <>
    <li className="video-link">
    <button className="btn" data-url={videoUrl} onClick={props.videoCopy}>Copy URL</button>
    <a className="btn" href={videoUrl} rel="noopener noreferrer" target="_blank">Watch</a>
    {props.videoTitle}
    </li>
    </>
  )
}