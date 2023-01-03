import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Technology.module.css"
import secondSectionImage from "../../public/images/secondsectiontechnology.png"
import Image from 'next/image'

export default function Technology() {
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <Head>
                <title>Technology - Etheware Space</title>
                <meta name="description" content="Technology Espace Etheware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.firstSectionTechnology}>
                <h2>ENGINEERED BY ETHEWARE</h2>
                <p>Etheware is deploying the world's most sophisticated broadband internet infrastructure, combining its experience in application development, cloud computing, and networking.</p>
                <button>Learn More</button>
            </div>
            <div className={styles.secondSectionTechnology}>
                <h2>How Etheware Space Works</h2>
                <p>Most satellite internet services are provided by individual geostationary satellites that circle the Earth at 35,786 kilometers. As a result, the round trip transmission time between the user and the satellite—also known as latency—is significant, making streaming, online gaming, video conferencing, and other high data rate activities almost impossible.</p>
                <p>Etheware Space beats all the other competition with it's constellation of thousands of satellites that orbit a significantly closer distance to Earth, circling at 550 kilometers, and covering the entire globe. Due to the low orbit, with Etheware satellites, latency is substantially lower—around 10 ms vs 600+ ms.</p>
                <Image src={secondSectionImage} alt="satellite" />
            </div>
            <div className={styles.thirdSectionTechnology}>
                <h2>THE MOST ADVANCED BROADBAND SATELLITE INTERNET AND CLOUD IN THE WORLD</h2>
                <p>Etheware has extensive expertise in both space and cloud operations as the world's largest upcoming startup supplying satellite services - and one of the only providers in the world with the capacity to launch rockets on demand.</p>
                <button>Visit our Site</button>
            </div>
        </div>
    )
}
