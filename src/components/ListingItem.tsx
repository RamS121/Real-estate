import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  showBestTime?: boolean;

  /** Style props */
  propFlex?: CSSProperties["flex"];

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  propFlex,
  onListingItemContainerClick,
}) => {
  const pricePerNightStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.listingItem} onClick={onListingItemContainerClick}>
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle}>{listingTitle}</div>
            <div className={styles.listingSubtitle}>{listingSubtitle}</div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight} style={pricePerNightStyle}>
            <div className={styles.price}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          {showBestTime && (
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="lazy"
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart}>Price chart</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
