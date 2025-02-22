import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
};

const Footer: FunctionComponent<FooterType> = ({ propMargin, propMargin1 }) => {
  const supportStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const hostingStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  return (
    <footer className={styles.footer}>
      <div className={styles.spacingOrganizer}>
        <div className={styles.borderCreator}>
          <div className={styles.gridOrganizer}>
            <h3 className={styles.support} style={supportStyle}>
              Support
            </h3>
            <div className={styles.helpCentre}>Help Centre</div>
            <div className={styles.aircover}>AirCover</div>
            <div className={styles.combatingDiscrimination}>
              Combating discrimination
            </div>
            <div className={styles.supportingPeopleWith}>
              Supporting people with disabilities
            </div>
            <div className={styles.cencellationOptions}>
              Cencellation options
            </div>
            <div className={styles.reportNeighbourhoodConcern}>
              Report neighbourhood concern
            </div>
          </div>
          <div className={styles.hostingParent}>
            <h3 className={styles.hosting} style={hostingStyle}>
              Hosting
            </h3>
            <div className={styles.localHome}>Local home</div>
            <div className={styles.coverForHosts}>Cover for hosts</div>
            <div className={styles.hostingResources}>Hosting resources</div>
            <div className={styles.communityForum}>Community forum</div>
            <div className={styles.hostingResponsibly}>Hosting responsibly</div>
          </div>
          <div className={styles.localhostParent}>
            <div className={styles.localhost}>Localhost</div>
            <div className={styles.newsroom}>Newsroom</div>
            <div className={styles.newFeatures}>New Features</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.investres}>Investres</div>
            <div className={styles.giftCards}>Gift cards</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
