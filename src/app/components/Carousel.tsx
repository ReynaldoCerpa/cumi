import React from 'react';
import { Carousel, Image } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const ImageCarousel: React.FC = () => (
  <Carousel >
    <div className='flex text-center'>
        <Image src="https://images.pistonheads.com/nimg/44424/10.jpg" alt='Ford escort' width={300}/>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default ImageCarousel;