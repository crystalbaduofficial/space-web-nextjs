import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Storage.module.css"
import AppStoreFeatures from '../../src/components/AppStoreFeaturing'

export default function Storage() {
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <Head>
                <title>Storage</title>
                <meta name="description" content="Storage Espace Etheware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.storageBannerMain}>
                <div className={styles.overlayContainer}></div>
                <h1>STORE WITH ETHEWARE SPACE</h1>
                <p>Etheware Space keeps all of your valuables - images, files, notes, and more — safe, up to date, and accessible wherever you are.</p>
                <button>Learn More</button>
            </div>
            <div className={styles.storageSecondSection}>
                <div className={styles.overlayContainer}></div>
                <h2>BACKUP AND SYNC ALL YOUR DEVICES INTO ONE ACCOUNT</h2>
                <p>Backup and Sync all your computers into one account. With this you'll get an even more an powerful and connected experience as all your important info will be synced across your devices.</p>
                <button>Test it Out</button>
            </div>
            <div className={styles.thirdSecondSection}>
                <AppStoreFeatures />
            </div>
            <div className={styles.fourthStorageSection}>
                <div className={styles.overlayContainer}></div>
                <h2>TRAVEL WITH ETHEWARE SPACE</h2>
                <p>Etheware Space comes with everything you need to get in your personal cloud and online in seconds</p>
                <button>Try the Space Demo</button>
            </div>
        </div>
    )
}
