import React, { useState } from 'react'
import styles from "../../styles/Navbar.module.css"
import Image from 'next/image'
import logo from "../../public/images/ethewarelogo.png"
import { AiOutlineSearch } from "react-icons/ai"
import { BiMenu } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"
import Link from 'next/link'

function Navbar() {
    const [menuShow, switchShowMenu] = useState(false)

    return (
        <div className={styles.navbarMain}>
            <div className={styles.containerNavbar}>
                <Link href="/"><Image src={logo} /></Link>
                <ul className={styles.desktopList}>
                    <li><Link href="/take-me-to-church">Storage</Link></li>
                    <li><Link href="/about">Satellite Internet</Link></li>
                    <li><Link href="/get-involved">Technology</Link></li>
                    <li><Link href="/giving-back">Supported Locations</Link></li>
                    <li><Link href="/prayer-requests">Support</Link></li>
                </ul>
                <ul className={styles.mobileList}>
                    <li>
                        <BiMenu onClick={() => {
                            switchShowMenu(true)
                        }} />
                    </li>
                </ul>
            </div>
            {menuShow && (<div className={styles.fullPagePopup}>
                <GrFormClose onClick={() => {
                    switchShowMenu(false)
                }} />
                <ul>
                    <li><Link href="/take-me-to-church">Take Me to Church</Link></li>
                    <li><Link href="/about">About Kindred</Link></li>
                    <li><Link href="/get-involved">How can I Get Involved</Link></li>
                    <li><Link href="/giving-back">Giving Back</Link></li>
                    <li><Link href="/prayer-requests">Prayer Requests</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="https://kindredcommunitycenter.com/">Community Partners</Link></li>
                    <li><Link href="/about">Meet the Team</Link></li>
                </ul>
            </div>)}
        </div>
    )
}

export default Navbar