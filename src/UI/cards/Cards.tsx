import React, { useEffect, useState } from 'react';
import style from './Cards.module.scss';
import { flickr } from '../../common/flickr';
import Spinner from '../spinner/Spinner';
import ImageDetail from '../imageDetail/ImageDetail';
import Card from '../card/Card';
import { TCardsProps, TImageInfo, TImageSize, TSearchInfoParams } from '../../types';

export const Cards = ({ cards }: TCardsProps) => {
  const [currentImageId, setCurrentImageId] = useState('');
  const [imageInfo, setImageInfo] = useState<TImageInfo | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImageInfo = async () => {
    const params: TSearchInfoParams = {
      photo_id: currentImageId,
    };
    try {
      const fetchedImageInfo = await flickr('photos.getInfo', params);
      setImageInfo(fetchedImageInfo.photo);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchImageSizes = async () => {
    const params: TSearchInfoParams = {
      photo_id: currentImageId,
    };
    try {
      const fetchedImageSizes = await flickr('photos.getSizes', params);
      const sizes = fetchedImageSizes.sizes.size;

      setImageUrl(
        sizes.reverse().filter((s: TImageSize) => s.label === 'Small' || s.label === 'Large')[0]
          .source
      );
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData = async () => {
    if (currentImageId) {
      setIsLoading(true);
      await fetchImageInfo();
      await fetchImageSizes();
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageId, viewerIsOpen]);

  const handleClick = (id: string) => {
    setCurrentImageId(id);
    setViewerIsOpen(true);
    setIsLoading(true);
  };

  const handleClose = () => {
    setViewerIsOpen(false);
  };

  if (!cards.length) return null;

  return (
    <>
      <div className={style.cards} data-testid="cards">
        {cards && cards.map((card) => <Card key={card.id} card={card} handleClick={handleClick} />)}
      </div>
      {viewerIsOpen && isLoading && <Spinner />}
      {viewerIsOpen && !isLoading && (
        <ImageDetail
          imageInfo={imageInfo as TImageInfo}
          imageUrl={imageUrl}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default Cards;
