import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SiNextdotjs } from 'react-icons/si'
type Props = {
    children: ReactNode
}

export function Layout({ children }: Props) {
    return (
        <>
            <div>
                <header>

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