import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, setTopicSelected } = props

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => {
        return <TopicListItem key={topic.id} topic={topic} setTopicSelected={setTopicSelected}/>
      })}
    </div>
  );
};

export default TopicList;
