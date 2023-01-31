import React from "react";

import Image from "next/image";

import ChickenLogo from "../../public/chicken-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        width={72}
        height={72}
        src={ChickenLogo}
        alt="Logo"
        style={{ borderRadius: "0.5rem" }}
      />
      <div className="text-3xl text-white">Dewindt Farms</div>
    </div>
  );
};

export default Logo;
