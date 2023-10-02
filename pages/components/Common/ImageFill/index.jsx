import React from 'react';
import Image from 'next/image';

const ImageFill = ({src, alt}) => {
    return (
        <div className='w-full h-full relative'>
            <Image 
                src={src} 
                alt={alt}
                fill 
                priority
                style={{
                    objectFit: 'cover',
                  }}
                quality={100}
            />
        </div>
    )
}

export default ImageFill;