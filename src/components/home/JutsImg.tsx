import React from "react";

export default function JutsImg() {
  return (
    <section className="px-3 md:px-10 lg:px-20  ">
      <div className="container max-h-120.5 mx-auto rounded-xl flex items-center overflow-hidden justify-center  ">
        <video autoPlay loop muted playsInline className=" w-full ">
          <source src="../assets/en mötesplats.mp4" type="video/mp4" />
          <source src="../assets/en mötesplats.mp4" type="video/quicktime" />
        </video>
      </div>
    </section>
  );
}
