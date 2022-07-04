import { NextComponentType, NextPageContext } from 'next';
import Image, { ImageLoader } from 'next/image';
import styles from '../styles/Home.module.css';

type Props = {
    width: number
    height: string
    quality?: number
    layout?: "fixed" | "fill" | "intrinsic" | "responsive"
    objectFit?: "contain" | "cover" | "fill"
}

const loader:ImageLoader = ({src, width, quality}) => {
    return `https://ahmed-cloud.mo.cloudinary.net/jeep-image-3/${src}?w=${width}&q=${quality || 75}`;
}

const AhmedSpecialImageElement:NextComponentType<NextPageContext, Props, Props> = ({width, height, quality = 75, layout = undefined, objectFit = undefined} : Props) => {
    const myImagePath = 'i.pinimg.com/originals/b5/47/98/b54798f53bca8c864637eee3ff47497e.jpg';

    return (
        <Image 
        className={styles.img}
        loader={loader}
        src={myImagePath}
        alt='my-image'
        width={width}
        height={height}
        layout={layout}
        objectFit={objectFit}
        />
    );
}

export default AhmedSpecialImageElement;