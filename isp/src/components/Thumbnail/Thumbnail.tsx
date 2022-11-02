import React from 'react';
import { Video } from '../../types/video';
export interface ThumbnailInterface {
	video: Video;
}

const Thumbnail : React.FC<ThumbnailInterface> = ({video}) => {
	return <img src={video.coverUrl} style={{marginLeft: "15px"}} />
};

export default Thumbnail;
