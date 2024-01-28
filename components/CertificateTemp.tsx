import React from "react";

interface ReusableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const CertificateTemp = ({
  src,
  alt,
  width,
  height,
  className,
}: ReusableImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`flex rounded-3xl my-[10px] hover:scale-105 mx-auto hover:ease-in-out hover:duration-500 ${className}`}
    />
  );
};

export default CertificateTemp;
