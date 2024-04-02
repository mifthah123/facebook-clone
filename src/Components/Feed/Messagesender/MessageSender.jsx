import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import Post from "../Post/Post";

function MessageSender(props) {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.itemHandler(input, imageUrl);
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="message-sender">
      <div className="header-top">
        <Avatar src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQfniAGFxBnFdtMRmpK8BnTN082bMLIo515fUZjEufqpLw3n9IwjJsaprNwPFsUDgruy8rdjNOJ5WHDulU" />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              console.log(e.target.value);
            }}
            className="messagesender-input"
            type="text"
            placeholder="Whats on your mind "
          />

          <input
            value={imageUrl}
            type="text"
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            placeholder="Image URL (Optional)"
          />

          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="header-bottom">
        <div className="messageSender-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3> Live Video</h3>
        </div>
        <div className="messageSender-option">
          <PhotoLibraryIcon style={{ color: "green" }} /> <h3> Photo/Video</h3>
        </div>
        <div className="messageSender-option">
          <MoodIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
      {/* <Feed/> */}
    </div>
  );
}

export default MessageSender;
