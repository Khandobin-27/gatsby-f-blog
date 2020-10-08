import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

export default function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
