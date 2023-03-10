import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import bannerImage from "../public/images/secondsectionhome.png"
import thirdSectionImage from "../public/images/thirdsectionhome.png"
import fourthSectionImage from "../public/images/fourthsectionhome.png"
import fifthSectionImage from "../public/images/fifthsectionhome.png"
import Image from 'next/image'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Etheware Space</title>
        <meta name="description" content="Home - Etheware Space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={styles.homePageContainer}>
        <video src={require("../public/videos/bannervideo.mp4")} autoPlay playsInline muted loop></video>
        <div className={styles.overlayBanner}></div>
        <div className={styles.mainContentBanner}>
          <h3>Powerful Satellite Internet meets Cloud Storage</h3>
          <h1>BETA TEST ETHEWARE SPACE</h1>
          <p>High-speed, low-latency broadband internet and cloud storage in remote and rural locations across the globe from an app. Testing now open, with limited spots available</p>
          <h2>2023 RELEASE DATE</h2>
          <h4>Try It Out</h4>
        </div>
      </div>
      <div className={styles.secondSectionHomePage}>
        <div className={styles.leftSecondSectionHp}>
          <h3 data-aos="fade-right">Powerful WIFI and Storage Wherever You Go</h3>
          <h1 data-aos="fade-right">STORE ONLINE GAMES, PHOTOS, VIDEOS, APPS & MORE</h1>
          <p data-aos="fade-right">With Etheware, users can engage in activities that historically have not been possible with satellite internet, all from an app.</p>
          <button>View the Trailer</button>
        </div>
        <div className={styles.rightSecondSectionHp}>
          <Image src={bannerImage} alt="secondsectionimage" />
        </div>
      </div>
      <div className={styles.thirdSectionHomePage}>
        <div className={styles.leftThirdSectionHp}>
          <Image src={thirdSectionImage} alt="thirdsectionimage" />
        </div>
        <div className={styles.rightThirdSectionHp}>
          <h2 data-aos="fade-left">ACCESS YOUR CLOUD + INTERNET ON ANY DEVICE</h2>
          <p data-aos="fade-left">Etheware Space offers powerful satellite network connections and total control over your Cloud Storage no matter where you go.</p>
        </div>
      </div>
      <div className={styles.fourthSectionHomePage}>
        <div className={styles.leftFourthSectionHp}>
          <h2 data-aos="fade-right">SHARE INTERNET CONNECTION FROM MILES AWAY</h2>
          <p data-aos="fade-right">Share your satellite internet and cloud storage with people in your Group, get updates, message and talk privately and view real-time performance metrics such as download speed, latency, and uptime.</p>
          <p data-aos="fade-right">Anyone with your space account on their device can use your network or cloud anywhere, anytime with your permission.</p>
        </div>
        <div className={styles.rightFourthSectionHp}>
          <Image src={fourthSectionImage} alt="fourthsectionimage" />
        </div>
      </div>
      <div className={styles.fifthSectionHomePage}>
        <div className={styles.leftFifthSectionHp}>
          <h3 data-aos="fade-right">SERVICE AVAILABLE IN 195 COUNTRIES</h3>
          <h2 data-aos="fade-right">EASY SELF INSTALL</h2>
          <p data-aos="fade-right">No need for WiFi routers, cables or bases. All you need is the Etheware Space app downloaded on your desktop, mobile phone or tablet to begin connecting and storing.</p>
          <p data-aos="fade-right">The Etheware Space apps allow you to upload and backup files to your cloud, access 250+ Apps and Games on the Etheware App Store, change settings, and more.</p>
          <button data-aos="fade-right">View the Trailer</button>
        </div>
        <div className={styles.rightFifthSectionHp}>
          <Image src={fifthSectionImage} alt="fifthsectionimage" />
        </div>
      </div>
      <div className={styles.sixthSectionHomePage}>
        <h2 data-aos="fade-right">TRAVEL WITH ETHEWARE SPACE</h2>
        <p data-aos="fade-right">Etheware Space comes with everything you need to get your personal cloud with satellite internet up and running in seconds, no matter where you are.</p>
        <button data-aos="fade-right">Sign Up to Beta Test</button>
      </div>
      <div className={styles.seventhSectionHomePage}>
        <h2>CUSTOMER QUOTES</h2>
        <div className={styles.quoteContainerMain}>
          <p data-aos="fade-up">"It's a completely different universe now because of Etheware Space. Before Etheware Space, we had to limit data and couldn't watch, save, or download 4K games and movies to use whenever we wanted. Now we have files uploading, Pandora playing, and Zoom running with no latency."</p>
          <p data-aos="fade-up">- Eric N. from McAfee | Oregon, USA</p>
        </div>
        <div className={styles.quoteContainerMain}>
          <p data-aos="fade-up">"We are happy to report that we are no longer one of the millions of people who are not online. Etheware Space brings a six-year journey to a swift finish by getting online in a matter of minutes."</p>
          <p data-aos="fade-up">- Alex S. from New York, USA</p>
        </div>
        <div className={styles.quoteContainerMain}>
          <p data-aos="fade-up">"Total game changer!" There's no overpromising and underdelivering like our previous sluggish provider. Simply download the app, create an account and you're done! We went from horrible connection to having the fastest internet connection and biggest cloud storage in the neighborhood in less than 5 minutes. "</p>
          <p data-aos="fade-up">- Allen B. from BAE Systems | Dubai, UAE</p>
        </div>
      </div>
      <div className={styles.eighthSectionHomePage}>
        <div className={styles.leftEighthSectionHp}>
          <Image src={thirdSectionImage} alt="thirdsectionimage" />
        </div>
        <div className={styles.rightEighthSectionHp}>
          <h2>MANAGE ETHEWARE SPACE ON ANY DEVICE</h2>
          <p>The Etheware Space apps allow you to upload and backup files to your cloud, access the Etheware App Store for 250+ Apps and Games, change settings, get updates, contact support, and view real-time performance metrics such as download speed, latency, and uptime.</p>
          <p>Download your space app on any device for use anywhere, anytime.</p>
          <div className={styles.buttonReSHp}>
            <button>Sign Up to Beta Test</button>
            <button>Learn More about Space</button>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
