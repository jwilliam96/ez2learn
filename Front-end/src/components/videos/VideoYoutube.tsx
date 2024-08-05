"use client"

import YouTubePlayer from "react-player/youtube";

interface Prop {
    videoId: string
}

export default function VideoYoutube({ videoId }: Prop) {


    return (
        <YouTubePlayer url={videoId} width="100%" height="100%" light />
    )
}
