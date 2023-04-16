import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchImageData } from '../../features/thunks';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TImageInfo } from '../../types';
import Spinner from '../../UI/spinner/Spinner';
import style from './ImageDetail.module.scss';

export const ImageDetail = () => {
  const { isLoading, imageInfo, imageUrl } = useAppSelector((state) => state.detail);

  const dispatch = useAppDispatch();
  const { currentImageId } = useParams();

  useEffect(() => {
    dispatch(fetchImageData(currentImageId as string));
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={style.popupBody} data-testid="image-detail">
      <div className={style.popupContent}>
        <img src={imageUrl} className={style.popupImg} />
        <h1 className={style.popupTitle}>{(imageInfo as TImageInfo).title._content}</h1>
        <p className={style.popupText}>By {(imageInfo as TImageInfo).owner.username}</p>
        <p className={style.popupText}>Taken on {(imageInfo as TImageInfo).dates.taken}</p>
        <p className={style.popupText}>Views: {(imageInfo as TImageInfo).views}</p>
        <h2 className={style.popupSubtitle}>Description</h2>
        <p
          className={style.popupDesc}
          dangerouslySetInnerHTML={{ __html: (imageInfo as TImageInfo).description._content }}
        ></p>
      </div>
      <Link to="/" className={style.back}>
        <div className={style.backImg}></div>
        Back to search
      </Link>
    </div>
  );
};

export default ImageDetail;
