import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import style from '@/styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={style.wrap}>
          <div className={style.nav}>
            <nav>
              <ul>
                <li><Link className={style.link} href={'/practice/01'}>Practice01</Link></li>
                <li><Link className={style.link} href={'/practice/02'}>Practice02</Link></li>
                <li><Link className={style.link} href={'/practice/03'}>Practice03</Link></li>
                <li><Link className={style.link} href={'/practice/04'}>Practice04</Link></li>
                <li><Link className={style.link} href={'/practice/05'}>Practice05</Link></li>
              </ul>
            </nav>
          </div>
          <div className={style.explanation}>
            <h2 className={style.subTitle}>next.js(React)</h2>
            <p>Reactの基本を学ぶために必要な内容を5つの課題にしました</p>
            <p>
              表示されているstyleも真似てみてください。<br />
              期限は２週間です。<br />すべて完成しなくてもいいです。<br />
              しかし、１つでも多く自分で調べてやってみてください。<br />
              わからないところがあればいつでも聞いてください。
              大垣が忙しい場合は
              <Link style={{ color: '#262626' }} href={'https://github.com/RikutoOgaki/nextjs-practioce'}>このリポジトリー</Link>
              を見てください。
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
