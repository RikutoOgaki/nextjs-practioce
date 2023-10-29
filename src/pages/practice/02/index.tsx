import { useState, useEffect } from 'react'

type Props = {
    message: string
}

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
            <p>{state.message}</p>
        </>
    )
}

export default function Practice02() {

    const [text, setTxt] = useState({
        message: ''
    })

    return (
        <>
            <PracticeComponent message={text.message} />
            <input type="text" value={text.message}
                onChange={(e) => setTxt({
                    ...text,
                    message: e.target.value
                })}
            />
        </>
    )
}