import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/SatelliteInternet.module.css"
import AppStoreFeatures from '../../src/components/AppStoreFeaturing'

export default function SatelliteInternet() {
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <Head>
                <title>Satellite - Etheware</title>
                <meta name="description" content="Satellite Espace Etheware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.firstSectionSatellite}>
                <div className={styles.overlayContainer}></div>
                <h1>CREATE YOUR OWN SHAREABLE NETWORK OR SERVER IN SECONDS</h1>
                <p>Etheware Space will have you creating your very own private satellite internet connection or server in seconds. This can be shared with anyone who has the Etheware Space app downloaded on their device.</p>
                <button>Try It Out</button>
            </div>
            <div className={styles.secondSectionSatellite}>
                <div className={styles.overlayContainer}></div>
                <h2>HIGHER SPEED, LOW LATENCY</h2>
                <p>Users can expect download speeds of up to 450 Mbps and latency of 10-50ms, allowing for high throughput connectivity for offices with up to 30 users, marketplaces, and demanding workloads worldwide.</p>
                <h4>There are no long-term contracts or exclusivity obligations with Etheware Space. Just connect.</h4>
                <button>Sign Up to Test</button>
            </div>
            <div className={styles.thirdSectionSatellite}>
                <div className={styles.overlayContainer}></div>
                <h2>ETHEWARE SPACE FOR SATELLITE INTERNET</h2>
                <p>Etheware Space is developing a low latency, broadband internet system to meet the needs of consumers across the globe.</p>
                <button>Sign Up</button>
            </div>
            <div className={styles.lastSectionSatellite}>
                <AppStoreFeatures />
            </div>
        </div>
    )
}
