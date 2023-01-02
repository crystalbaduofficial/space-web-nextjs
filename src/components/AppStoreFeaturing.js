import React from 'react'
import styles from "../../styles/AppStoreFeature.module.css"

function AppStoreFeatures() {
    return (
        <div className={styles.appStoreContainer}>
            <div className={styles.leftAppStoreContainer}>
                <p>Have an app you want displayed in front of our 121,416 waitlisted users?</p>
                <h3>Upload your App to the Etheware Space App Store</h3>
            </div>
            <button>Get Started</button>
        </div>
    )
}

export default AppStoreFeatures