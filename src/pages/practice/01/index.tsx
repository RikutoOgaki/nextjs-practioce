import { useState } from 'react'
import { Layout } from '@/components/Layout'
import style from '@/styles/practice/01/index.module.scss'

export default function Practice01() {

    // ボタンがクリックされると入力された２つの数字を足し算する機能

    const [state, setState] = useState({
        calA: '',
        calB: '',
        result: 0
    })

    return (
        <>
            <Layout>
                <div className={style.wrap}>
                    <div className={style.explanationBox}>
                        <h2>Practice01</h2>
                        <p>2つのinputに数字を入力し、足し算して、どこかに出力してください</p>
                        <p></p>
                    </div>
                    <div className={style.titleBox}>
                        <h1 className={style.title}>足し算アプリ</h1>
                    </div>
                    <div className={style.resultBox}>
                        <p className={style.result}>{state.result}</p>
                    </div>
                    <div className={style.inputBox}>
                        <input
                            type="text"
                            value={state.calA}
                            className={style.input}
                            onChange={(e) => setState({
                                ...state,
                                calA: e.target.value
                            })}
                        />
                        <input
                            type="text"
                            value={state.calB}
                            className={style.input}
                            onChange={(e) => setState({
                                ...state,
                                calB: e.target.value
                            })}
                        />
                        <button
                            className={style.btn}
                            onClick={() => {
                                let numA = Number(state.calA)
                                let numB = Number(state.calB)

                                setState({
                                    ...state,
                                    result: numA + numB
                                })
                            }}
                        >計算</button>
                    </div>
                </div>
            </Layout>
        </>
    )
}