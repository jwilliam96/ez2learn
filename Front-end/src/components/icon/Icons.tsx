import { FaCode, FaFacebookSquare, FaLinkedinIn, FaRegStar } from "react-icons/fa";
import { FiFigma, FiBookOpen, FiBook, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IoLogoInstagram, IoLogoYoutube, IoMdNotificationsOutline } from "react-icons/io";
import { IoTimeOutline, IoSettingsOutline, IoCartOutline } from "react-icons/io5";
import { PiHouse } from "react-icons/pi";
import { BiComment } from "react-icons/bi";
import { RxExit } from "react-icons/rx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


interface IconProps {
    className?: string;
    size?: number
}

export function IconLogo({ className, size }: IconProps) {
    return <FaCode size={size} className={className} />
}

export function IconDelete({ className, size = 30 }: IconProps) {
    return <AiOutlineDelete size={size} className={className} />
}


export function IconFigma({ className, size = 30 }: IconProps) {
    return <FiFigma className={className} size={size} />
}

export function IconGoogle() {
    return <FaGoogle size={30} />
}

export function IconGitHub() {
    return <FaGithub size={30} />
}

export function IconInstagram() {
    return <IoLogoInstagram size={30} />
}

export function IconYoutube() {
    return <IoLogoYoutube size={30} />
}

export function IconLinkedin() {
    return <FaLinkedinIn size={30} />
}

export function IconFacebook() {
    return <FaFacebookSquare size={30} />
}
export function IconStars({ className, size }: IconProps) {
    return <FaRegStar className={className} size={size} />
}
export function IconStarsCategory({ className }: IconProps) {
    return <FaRegStar className={className} size={70} />
}
export function IconTime() {
    return <IoTimeOutline size={15} />
}
export function IconHouse() {
    return <PiHouse size={30} />
}
export function IconOpenBook() {
    return <FiBookOpen size={30} />
}
export function IconBook() {
    return <FiBook size={30} />
}
export function IconComment() {
    return <BiComment size={30} />
}
export function IconSetting() {
    return <IoSettingsOutline size={30} />
}
export function IconExit() {
    return <RxExit size={30} />
}
export function IconLeftArrow({ className }: IconProps) {
    return <FaArrowLeft className={className} size={30} />
}
export function IconRightArrow({ className }: IconProps) {
    return <FaArrowRight className={className} size={30} />
}
export function IconNotification({ className, size = 20 }: IconProps) {
    return <IoMdNotificationsOutline className={className} size={size} />
}

export function IconCartIcon({ size, className }: IconProps) {
    return <IoCartOutline size={size} className={className} />
}

export function IconFlechaIz({ size, className }: IconProps) {
    return <FiArrowLeft size={size} className={className} />
}

export function IconFlechaDe({ size, className }: IconProps) {
    return < FiArrowRight size={size} className={className} />
}