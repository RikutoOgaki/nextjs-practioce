import { useState, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import style from '@/styles/practice/03/index.module.scss'

function rollDice() {
    return Math.floor(Math.random() * 6 + 1)
}

export default function Practice03() {

    const [state, setState] = useState(1)

    useEffect(() => {
        setState(rollDice())
    }, [])


    return (
        <>
            <Layout>
                <div className={style.wrap}>
                    <div className={style.explanationBox}>
                        <h2>サイコロ</h2>
                        <p>
                            ボタンが押されるたびに、１〜６の数字がランダムに表示される実装を作る
                            検索ヒント<br />
                            Math,useEffect
                        </p>
                    </div>
                    <div className={style.com}>
                        <p className={style.text}>{state}</p>
                        <button
                            className={style.btn}
                            onClick={() => setState(rollDice())}
                        >
                            サイコロをふる
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    )
}