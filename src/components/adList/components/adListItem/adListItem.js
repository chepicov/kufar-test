import React from 'react';
import { getThumbLink, getLocation, getFormattedTime, getPrice } from 'helpers/utils';

import photoSvg from 'assets/icons/photo.svg';
import locationSvg from 'assets/icons/location.svg';
import clockSvg from 'assets/icons/clock.svg';
import heartSvg from 'assets/icons/heart.svg';

import './adListItem.styles.css';

const AdListItem = (props) => {
  const {
    ad,
  } = props;

  const thumb = getThumbLink(ad.images[0]);
  const time = getFormattedTime(ad.list_time);
  const location = getLocation(ad.params);
  const price = getPrice(ad.price_byn);

  return (
    <li
      className="ad"
    >
      <a
        className="ad__wrapper"
        href={ad.ad_link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="ad__thumb">
          {
            thumb
              ? (
                <img className="ad__image" src={thumb} alt={ad.subject} />
              ) : (
                <div className="ad__image ad__image--empty">
                  <img className="ad__image-placeholder" src={photoSvg} alt="Нет фото" />
                </div>
              )
          }
          <button className="ad__like-button">
            <img className="ad__like" src={heartSvg} alt="Нравится" />
          </button>
        </div>
        <div className="ad__body">
          <div className="ad__header">
            <div className="ad__title">
              {ad.subject}
            </div>
            <div className="ad__category">
              {ad.params.category.value}
            </div>
          </div>
          <div className="ad__footer">
            <div className="ad__price">
              {price}
            </div>
            <div className="ad__info">
              <div className="footer-item">
                <img className="footer-item__icon" src={locationSvg} alt="Регион: " />
                <div className="footer-item__title">{location}</div>
              </div>
              <div className="footer-item">
                <img className="footer-item__icon" src={clockSvg} alt="Опубликовано: " />
                <div className="footer-item__title">{time}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

export default AdListItem;
