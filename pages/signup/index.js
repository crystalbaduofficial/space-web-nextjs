import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/SignUp.module.css"
import Image from 'next/image'
import imageMain from "../../public/images/ethewarelogomainsignup.png"

export default function SignUp() {
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <Head>
                <title>Sign Up - Etheware Space</title>
                <meta name="description" content="Sign Up Espace Etheware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.firstSectionSignUp}>
                <div className={styles.containerFirstSectionSignUp}>
                    <h1>Sign up to Beta Test Etheware Space</h1>
                    <p>Official Release: 2023</p>
                    <p>Test and share your opinion of the pre-released version of Etheware Space before it's official release in 2023</p>
                    <input placeholder='Full Name' />
                    <input placeholder='Email Address' />
                    <input placeholder='Phone Number' />
                    <input placeholder='Service Address' />
                    <div className={styles.getStartedButton}>
                        <button>Get Started</button>
                    </div>
                    <p className={styles.textParaBottom}>Testers will receive an Etheware verified certificate, a Limited Edition 2050 Etheware Beta-Tester Merchandise Gift, and have their name on the Etheware Space Credits page</p>
                    <p className={styles.textParaBottom}>Browse the internet and store like it's nobody's business. Because it isn't. Good for storing all the basics, like contacts, calendars, and notes or connecting to your own private internet anywhere you go.</p>
                    <Image src={imageMain} alt="Etheware Logo" />
                </div>
            </div>
        </div>
    )
}
