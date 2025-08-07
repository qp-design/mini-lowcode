import React, {useEffect, useRef} from "react";

export const Video = ({src, style, actived}: {src: string; style: object; actived: boolean}) => {
    const videoRefs = useRef(null);

    useEffect(() => {
        // 处理视频播放/暂停
        if(actived) {
            videoRefs.current!.play().catch(error => {
                console.log('自动播放被阻止:', error);
                // 可以在这里添加用户交互后播放的逻辑
                videoRefs.current!.controls = true;
            });
        } else {
            videoRefs.current!.pause();
            videoRefs.current!.currentTime = 0;
            videoRefs.current!.controls = false;
        }
    }, [actived]);

    return (
        <video
            ref={videoRefs}
            muted
            loop
            preload="auto"
            controls
            style={style}
            src={src}
        ></video>
    )
}