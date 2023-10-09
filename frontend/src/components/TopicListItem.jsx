import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, setTopicSelected } = props

  return (
    <div className="topic-list__item">
      <span onClick={() => setTopicSelected(topic)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
