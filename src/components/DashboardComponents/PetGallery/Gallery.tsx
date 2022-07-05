import styled  from './Gallery.module.css'
import Image from 'next/future/image'
import sandy from '../assets/Sandy.jpg'
import Luci from '../assets/Luci.jpg'
import Socks from '../assets/Socks.jpg'
import Tinkerbell from '../assets/Tinkerbell.jpg'


export const PetGallery = () => {
    return (
       

        <div className={styled.Gallery}>
        <div className={styled.GalleryHeadingWrapper}>

            <h1 className={styled.GalleryHeading}>Pet Gallery</h1>
        </div>
            <div className={styled.GalleryContainer}>
                <div className={styled.GalleryImageWrapper}>
                    <Image src={Socks} alt='Gallery Image' className={styled.GalleryImage}/>
                </div>
                <div>

                <div className={styled.GalleryImageWrapper}>
                    <Image src={sandy} alt='Gallery Image' className={styled.GalleryImage}/>
                </div>
                    <h4>2022</h4>
                </div>
                <div className={styled.GalleryImageWrapper}>
                    <Image src={Luci} alt='Gallery Image' className={styled.GalleryImage}/>
                </div>
                <div className={styled.GalleryImageWrapper}>
                    <Image src={Tinkerbell} alt='Gallery Image' className={styled.GalleryImage}/>
                </div>
            </div>

        </div>
      
    )
}

 