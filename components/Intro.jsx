import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="/montso_dp.jpg"
            alt="Montso's pic"
            width={200}
            height={200}
            priority={true}
            quality={95}
            className="rounded-full border-[0.35rem] border-white h-24 w-24 object-cover shadow-xl"
          />
          <span className="text-4xl absolute bottom-0 right-0">👋</span>
        </div>
      </div>
    </section>
  );
}
