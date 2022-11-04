import React from 'react';
export interface ThumbnailProps {
	urlPicture: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ urlPicture }) => {


	return <img src={urlPicture} style={{marginLeft: "15px"}} />
};

export default Thumbnail;
