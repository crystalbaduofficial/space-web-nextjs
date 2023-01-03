import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Support.module.css"
import ethewareLogo from "../../public/images/ethewarelogobig.png"
import Image from 'next/image'

export default function SupportedLocations() {
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <Head>
                <title>Support - Etheware Space</title>
                <meta name="description" content="Support Espace Etheware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.firstSectionSupport}>
                <h2>Etheware Support is here to assist you.</h2>
                <p>Have a question? Tell us more.</p>
                <p>24/7 Support</p>
            </div>
            <div className={styles.secondSectionSupport}>
                <div className={styles.containerSectionSupport}>
                    <h2>Get In Touch</h2>
                    <div className={styles.innerContainerSectionSupport}>
                        <div className={styles.leftIconSecSup}>
                            <div className={styles.boxContainersMain}>
                                <div className={styles.boxContainersMainInner}>
                                    <p>Social Media</p>
                                    <p>Twitter: @ethewaretech</p>
                                    <p>Instagram: @ethewaretech</p>
                                </div>
                                <div className={styles.boxContainersMainInner}>
                                    <p>Phone</p>
                                    <p><a href="tel:+1-619-872-3038">+1-619-872-3038</a></p>
                                </div>
                            </div>
                            <div className={styles.boxContainersMain}>
                                <div className={styles.boxContainersMainInner}>
                                    <p>Email</p>
                                    <p><a href="mailto:support@etheware.com">Send Feedback</a></p>
                                </div>
                                <div className={styles.boxContainersMainInner}>
                                    <p>Location</p>
                                    <p>San Diego, California</p>
                                </div>
                            </div>
                            <div className={styles.imageLeftBoxContainer}>
                                <Image src={ethewareLogo} alt="Etheware_Logo" />
                            </div>
                        </div>
                        <div className={styles.rightIconSecSup}>
                            <input placeholder='Full Name *' />
                            <input placeholder='Contact Email *' />
                            <input placeholder='Contact Number *' />
                            <input placeholder='Type Your City *' />
                            <textarea placeholder='Tell us about your enquiry:'></textarea>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
