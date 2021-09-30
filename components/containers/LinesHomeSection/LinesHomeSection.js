import { useEffect } from 'react';
import styles from './LinesHomeSection.module.scss';
import Footer from '../../sections/footer/footer';
import FooterDesktop from '../../sections/footer/footerdesktop';
import BoxUserName from '../../common/boxusername/boxusername';
import LineContainer from '../../sections/LineContainer/LineContainer';
import useWindowSize from '../../utils/windowSice';
import IsVisible from '../../utils/isVisible';

const LinesHomeSection = ({ userName, isFooterMobile, isPage1200, is3rdSectionVisible }) => {
    const [setRef, visible] = IsVisible({ threshold: 0.2 });

    useEffect(() => {
        is3rdSectionVisible(visible);
    }, [visible]);

    const size = useWindowSize();
    return (
        <div
            style={{
                height: isPage1200 ? `${size.height}px` : '100%',
            }}
            className={styles.linesHomeSection}
            ref={setRef}
        >
            <section className={styles.linesGraphicContainer}>
                <LineContainer />
            </section>

            <BoxUserName className={styles.boxUserName} boxUserName name={userName} />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default LinesHomeSection;
