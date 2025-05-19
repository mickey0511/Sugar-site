import React from "react";
// import Image from "next/image";

interface InfoSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  reverse = false,
}) => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-[1440px] px-8 mx-auto ">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-8 lg:gap-12 xl:gap-16`}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[black] leading-tight">
              <span className="text-[#362E94]">{title}</span> {subtitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            {/* <div className="relative aspect-video w-full rounded-xl shadow-lg"> */}
            <img src={imageSrc} className="h-full w-full" alt="" />
              {/* <Image
                src={imageSrc}
                alt="Info Image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
