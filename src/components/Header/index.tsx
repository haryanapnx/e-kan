import React from 'react'
import { Carousel, Image } from 'antd';
import { images } from './images'
import logo from '../../logo.svg';
import './style.scss';



const Header: React.FC = () => {
  return (
    <header id="header">
      <div className="__background">
        <Carousel autoplay>
          {images.map(item => (
            <Image
              key={item}
              width="100%"
              src={item}
              placeholder={
                <Image preview={false} src={logo} width={200}/>
              }
            />
          ))}
        </Carousel>
      </div>
    </header>
  )
}
export default Header;
