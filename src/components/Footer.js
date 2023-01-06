import React from 'react'
import styles from "../../styles/Footer.module.css"
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footerMain}>
            <div className={styles.footerTopContainer}>
                <div className={styles.footerInnerTopContainer}>
                    <h4>How It Works</h4>
                    <p><Link href="https://espace.etheware.com/technology" target="_blank">Learn more About The Technology</Link></p>
                </div>
                <div className={styles.footerInnerTopContainer}>
                    <h4>Why Etheware</h4>
                    <p><Link href="https://www.etheware.com/why-choose-etheware" target="_blank">Why Choose Etheware</Link></p>
                    <p><Link href="https://www.etheware.com/etheware-difference" target="_blank">The Etheware Difference</Link></p>
                    <p><Link href="https://www.etheware.com/company" target="_blank">Company</Link></p>
                </div>
                <div className={styles.footerInnerTopContainer}>
                    <h4>Manage Your Etheware Account</h4>
                    <p><Link href="https://www.etheware.com/sign-up" target="_blank">Create an Account</Link></p>
                    <p><Link href="https://www.etheware.com/sign-in" target="_blank">Sign In</Link></p>
                    <p><Link href="https://www.etheware.com/profile-settings" target="_blank">Manage Your Account</Link></p>
                </div>
                <div className={styles.footerInnerTopContainer}>
                    <h4>Etheware.com</h4>
                    <p><Link href="https://www.etheware.com/store" target="_blank">Store</Link></p>
                    <p><Link href="https://www.etheware.com/support" target="_blank">Etheware Support</Link></p>
                    <p><Link href="https://www.etheware.com/trade-in" target="_blank">Etheware Trade-in</Link></p>
                </div>
                <div className={styles.footerInnerTopContainer}>
                    <h4>About Etheware</h4>
                    <p><Link href="https://www.linkedin.com/company/etheware/" target="_blank">Career Opportunities</Link></p>
                    <p><Link href="https://www.etheware.com/contact" target="_blank">Contact Etheware</Link></p>
                </div>
                <div className={styles.footerInnerTopContainer}>
                    <h4>Get In Touch</h4>
                    <p>Contact us at <Link href="tel:1-619-872-3038">1-619-872-3038</Link></p>
                    <p>or <Link href="mailto:solutions@etheware.com">Email Etheware</Link></p>
                    <p>United States</p>
                </div>
            </div>
            <div className={styles.creditsContainer}>
                <p>Made by the {new Date().getFullYear()} Etheware.com team.</p>
            </div>
            <div className={styles.footerBottom}>
                <p>
                    <Link href="https://www.etheware.com/legal" target="_blank">
                        Privacy Policy
                    </Link>
                </p>
                <p>
                    <Link href="https://www.etheware.com/legal" target="_blank">
                        Terms of Use
                    </Link>
                </p>
                <p>
                    <Link href="https://www.etheware.com/legal" target="_blank">
                        Sales and Refunds
                    </Link>
                </p>
                <p>
                    <Link href="https://www.etheware.com/legal" target="_blank">
                        Legal
                    </Link>
                </p>
                <p>
                    <Link href="https://www.etheware.com/sitemap" target="_blank">
                        Site Map
                    </Link>
                </p>
            </div>
            <div className={styles.creditsContainer}>
                <p>Copyright &copy; Etheware LLC. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer