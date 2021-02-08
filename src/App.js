import { useState } from "react";
import "./styles.css";

export default function App() {
  const [uploadedVideo, setUploadedVideo] = useState([]);

  const uploadVideos = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      document.getElementById("video").src = reader.result;
    };
    reader.onerror = (err) => console.log(err);
  };
  return (
    <div className="App">
      <h1>Video upload</h1>
      <input type="file" onChange={uploadVideos} />
      <hr />
      <video width="480" controls id="video">
        <source id="src" src="video.mp4" />
      </video>
      <hr />
      <button
        id="start"
        onClick={() => document.getElementById("video").play()}
      >
        Start playing
      </button>
    </div>
  );
}
