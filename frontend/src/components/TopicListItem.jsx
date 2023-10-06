import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {topic} = props

  return (
    <div className="topic-list__item">
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
