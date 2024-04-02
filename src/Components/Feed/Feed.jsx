import React, { useState } from "react";
import "./Feed.css";
import StoryReel from "./Storyreel/StoryReel";
import MessageSender from "./Messagesender/MessageSender";
import Post from "./Post/Post";

function Feed() {
  const [itemValue, setItemValue] = useState([]);

  const profilePic =
    "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQfniAGFxBnFdtMRmpK8BnTN082bMLIo515fUZjEufqpLw3n9IwjJsaprNwPFsUDgruy8rdjNOJ5WHDulU";
  const userName = "Mifthah";
  const addItem = (msg, postURL) => {
    const value = [...itemValue];
    const items = {
      profilePic,
      userName,
      message: msg,
      postURL,
    };
    value.push(items);
    setItemValue(value);
  };

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender itemHandler={addItem} />
      {itemValue
        .map(({ profilePic, userName, message, postURL }) => (
          <Post
            profilePic={profilePic}
            userName={userName}
            message={message}
            postURL={postURL}
          />
        ))
        .reverse()}
    </div>
  );
}

export default Feed;
