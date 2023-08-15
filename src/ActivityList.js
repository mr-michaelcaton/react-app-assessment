import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList({ activities }) {
  if (!activities || activities.length < 1) return null;

  const list = activities.map((activity, index) => {
    //check props
    let time = activity.time;
    let description = activity.description;

    /*   console.log(`${index}: ${time} ${description}`) */
    //

    return { key: index, time: time, description: description };
  });

  console.log(list);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6"
          style={{ border: "1px solid #000", textAlign: "left" }}
        >
          {list.forEach((listItem) => {
            <Activity
              time={listItem.time}
              description={listItem.description}
            />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ActivityList;
