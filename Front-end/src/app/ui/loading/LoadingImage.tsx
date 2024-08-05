import Image from "next/image";
import imageSinFondo from "/public/image/video-image.png"

export default function LoadingImage() {
    return (
        <Image src={imageSinFondo} alt="imagen sin fondo" className="w-full" priority />
    )
}
