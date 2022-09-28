import React from "react";
import "./Updates.css";
import users  from "../../Data/tweets";

const Updates = () => {
  return (
    <div className="Updates">
      {
        users.map((user) => {
          return (
            <div key={user.id} className="update">
              <img src={user.user.profile_image_url} alt="profile" />
              <div className="noti">
                <div  style={{marginBottom: '0.5rem'}}>
                  <span>{user.user.name}</span> <br />
                  <span> {user.text}</span>
                </div>
                  
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Updates;
