import React, { useEffect, useState } from 'react'
import styles from "../../styles/Navbar.module.css"
import Image from 'next/image'
import logo from "../../public/images/ethewarelogo.png"
import { AiOutlineSearch } from "react-icons/ai"
import { BiMenu } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"
import Link from 'next/link'

function Navbar() {
    const [menuShow, switchShowMenu] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                document.getElementById("navbarcolorchange").style.backgroundColor = "black"
            } else {
                document.getElementById("navbarcolorchange").style.backgroundColor = "transparent"
            }
        })
    }, [])

    return (
        <div className={styles.navbarMain} id="navbarcolorchange">
            <div className={styles.containerNavbar}>
                <Link href="/"><Image src={logo} alt="logo" /></Link>
                <ul className={styles.desktopList}>
                    <li><Link href="/storage">Storage</Link></li>
                    <li><Link href="/satellite-internet">Satellite Internet</Link></li>
                    <li><Link href="/technology">Technology</Link></li>
                    <li><Link href="/supported-locations">Supported Locations</Link></li>
                    <li><Link href="/support">Support</Link></li>
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
                    <li><Link href="/storage">Storage</Link></li>
                    <li><Link href="/satellite-internet">Satellite Internet</Link></li>
                    <li><Link href="/technology">Technology</Link></li>
                    <li><Link href="/supported-locations">Supported Locations</Link></li>
                    <li><Link href="/support">Support</Link></li>
                </ul>
            </div>)}
        </div>
    )
}

export default Navbar