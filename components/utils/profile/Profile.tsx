import React from "react";
import Image from "next/image";
import OscillatingText from "@/components/utils/profile/OscillatingText";

const Profile = () => {
  return (
    <div className="profile ">
      <div className="relative">
        <Image
          src="/profile_svg.svg"
          alt="profile"
          width={500}
          height={500}
          className="relative z-10 "
        />
        <div className="profileCircleWraper  ">
          <div className="profileCircleContent "></div>
        </div>
      </div>
      <OscillatingText />
    </div>
  );
};

export default Profile;
