import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { SiNextdotjs } from 'react-icons/si'
import Link from 'next/link'
import style from '@/styles/components/layout.module.scss'

type Props = {
    children: ReactNode
}

export function Layout({ children }: Props) {

    const [back, setBack] = useState('/')

    return (
        <>
            <div className={style.wrap}>
                <header className={style.head}>
                    <SiNextdotjs className={style.icon} />
                    <h1 className={style.title}>next.js Study</h1>
                </header>
                <motion.main
                    className={style.main}
                    initial={{ opacity: 0 }} // 初期状態
                    animate={{ opacity: 1 }} // マウント時
                    exit={{ opacity: 0 }}    // アンマウント時
                >
                    {children}
                </motion.main>
                <footer className={style.foot}>
                    <Link href={back} className={style.link}>Topへ</Link>
                </footer>
            </div>
        </>
    )
}