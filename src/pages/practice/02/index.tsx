import { useState, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import style from '@/styles/practice/02/index.module.scss'

type Props = {
    message: string
}

// messageを出力するComponent
const PracticeComponent = (props: Props) => {

    const [state, setState] = useState<Props>({
        message: props.message
    })

    useEffect(() => {
        setState({
            ...state,
            message: props.message
        })
    }, [props])

    return (
        <>
            <p style={{ fontSize: '3rem' }}>{state.message}</p>
        </>
    )
}

export default function Practice02() {

    const [text, setTxt] = useState({
        message: ''
    })

    return (
        <>
            <Layout>
                <div className={style.wrap}>
                    <div className={style.explanationBox}>
                        <h2>Practice02</h2>
                        <p>
                            メッセージを受け取るコンポーネントを作成し、
                            inputで入力された値を出力しなさい。
                        </p>
                        <p>コンポーネント側で値を渡す処理が必要になる</p>
                        <p>Reactはすべて関数で動いているので、引数に何を渡すかが重要です。</p>
                        <p>検索キーワード：props、引数、コンポーネント</p>
                    </div>
                    <div className={style.com}>
                        <PracticeComponent message={text.message} />
                        <input type="text" value={text.message}
                            onChange={(e) => setTxt({
                                ...text,
                                message: e.target.value
                            })}
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}