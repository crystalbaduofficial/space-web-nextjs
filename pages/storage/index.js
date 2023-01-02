import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Contact.module.css"
import Footer from '../../src/Components/Footer'
import { useState } from 'react'
import { send } from 'emailjs-com';
import Swal from 'sweetalert2'

export default function Storage() {
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <Head>
                <title>Storage</title>
                <meta name="description" content="Storage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
        </div>
    )
}
