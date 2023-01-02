import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/SupportedLocations.module.css"
import AppStoreFeatures from '../../src/components/AppStoreFeaturing'

export default function SupportedLocations() {
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <Head>
                <title>Supported Locations - Etheware</title>
                <meta name="description" content="Supported Locations Espace Etheware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.firstSectionSupportedLocations}>
                <div className={styles.overlayContainer}></div>
                <h2>FAST, SECURE SPEEDS ANYWHERE YOU GO</h2>
                <p>Etheware Space is available in all countries in the world, regardless of location through the app.</p>
                <button>Try It Out</button>
            </div>
            <div className={styles.secondSectionSupportedLocations}>
                <div className={styles.leftSecSupLoc}>
                    <h2>STAY CONNECTED ANYWHERE IN THE WORLD</h2>
                    <p>Etheware Space is ideal for rural and distant areas. Add as many capabilities as you need to your Etheware account and control them all from a single synchronized account.</p>
                    <button>Learn More</button>
                </div>
                <div className={styles.rightSecSupLoc}>
                </div>
            </div>
            <div className={styles.lastSectionSupportedLocations}>
                <AppStoreFeatures />
            </div>
        </div>
    )
}
