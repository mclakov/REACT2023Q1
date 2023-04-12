import React from 'react';
import style from './ImageDetail.module.scss';
import { TImageInfo } from '../../types';

type TImageDetailProps = {
  imageInfo: TImageInfo;
  imageUrl: string;
  handleClose: () => void;
};

export const ImageDetail = ({ imageInfo, imageUrl, handleClose }: TImageDetailProps) => {
  const stopPropagation = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  const { title, owner, description, dates, views } = imageInfo;
  console.log('imageInfo', imageInfo);
  return (
    <div className={style.popup} data-testid="image-detail">
      <div className={style.popupBody} onClick={handleClose}>
        <div className={style.popupContent} onClick={stopPropagation}>
          <img src={imageUrl} className={style.popupImg} />
          <h1 className={style.popupTitle}>{title._content}</h1>
          <p className={style.popupText}>By {owner.username}</p>
          <p className={style.popupText}>Location {owner.location}</p>
          <p className={style.popupText}>Taken on {dates.taken}</p>
          <p className={style.popupText}>Views: {views}</p>
          <h2 className={style.popupSubtitle}>Description</h2>
          <p
            className={style.popupDesc}
            dangerouslySetInnerHTML={{ __html: description._content }}
          ></p>
          <button className={style.closeBtn} onClick={handleClose}></button>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
