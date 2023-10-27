import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SiNextdotjs } from 'react-icons/si'
import style from '@/styles/components/layout.module.scss'

type Props = {
    children: ReactNode
}

export function Layout({ children }: Props) {
    return (
        <>
            <div>
                <header>
                    <SiNextdotjs />
                    <h1 className={style.title}>next.js Study</h1>
                </header>
                <motion.main>
                    {children}
                </motion.main>
                <footer>

                </footer>
            </div>
        </>
    )
}