import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          alt=""
          src="https://st2.depositphotos.com/1005844/12317/i/450/depositphotos_123179322-stock-photo-road-to-horizon-background.jpg"
        />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
