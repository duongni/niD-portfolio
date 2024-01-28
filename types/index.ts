export interface customButtonProps {
  title?: string;
  btnType?: "button" | "submit";
  onClick?: string;
  textStyles?: string;
  containerStyles?: string;
  centeredIcon: React.ReactNode;
}
export interface ReusableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
