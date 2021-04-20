import React from 'react'
import { Carousel, Image } from 'antd';
import { banner1, banner2, banner3 } from "commons/images";
import './style.scss';

export const images: string[] = [banner1, banner2, banner3]

const Header: React.FC = () => {
  return (
    <header id="header">
      <div className="__background">
        <Carousel autoplay>
          {images.map(item => (
            <Image
              key={item}
              src={item}
              preview={false}
            />
          ))}
        </Carousel>
      </div>
    </header>
  )
}
export default Header;
