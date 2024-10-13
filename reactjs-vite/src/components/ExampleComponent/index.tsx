import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import ExampleChildComponent from "./components/ExampleChildComponent"
import ExampleChildComponentWithForwardRef from "./components/ExampleChildComponentWithForwardRef"

interface IExampleComponentProps {
    exampleStrAttr: string
    exampleNumberAttr: number
    exampleObjAttr: {
        exampleBooleanAttr: boolean
        exampleArrayAttr: string[]
    }
    exampleObjArrayAttr: {
        strAttr: string
        unionTypeAttr: string | number | boolean
    }[]
}

/**
 * This is an example component to be reused in several pages. Here you'd implement buttons, layouts, texts, etc.
 * 
 * Keep in mind that Context Providers MUST NOT be used in these components due to the coupling involved. If you need
 * information from the context provider in this component, make sure to receive it through the properties.
 */
export default function ExampleComponent({
    exampleNumberAttr,
    exampleObjArrayAttr,
    exampleObjAttr,
    exampleStrAttr
}: Readonly<IExampleComponentProps>) {
    // #region States
    const [exampleState, setExampleState] = useState()
    // #endregion

    // #region Refs
    const exampleChildRef = useRef<HTMLDivElement>(null)
    // #endregion

    // #region Memos
    const exampleMemo = useMemo(() => {
        if (exampleState) return exampleNumberAttr

        return exampleStrAttr
    }, [exampleNumberAttr, exampleState, exampleStrAttr])
    // #endregion

    // #region Callbacks
    const exampleCallback = useCallback(() => {
        if (exampleMemo) setExampleState(undefined)

        if (exampleObjArrayAttr) return exampleObjAttr
    }, [exampleMemo, exampleObjArrayAttr, exampleObjAttr])
    // #endregion

    // #region Effects

    // onChangeExampleStateExecuteCallback
    useEffect(() => {
        if (!exampleState) return
        exampleCallback()
    }, [exampleCallback, exampleState])

    // onChangeExampleStateExecuteSomethingOnTheExampleRef
    useEffect(() => {
        if (!exampleState || !exampleChildRef.current) return
        exampleChildRef.current.focus()
    }, [exampleState])

    // #endregion

    return (
        <div className="flex flex-col bg-slate-500">
            <p className="text-lg">Example component</p>
            <ExampleChildComponent />
            <ExampleChildComponentWithForwardRef exampleAttr="example" ref={exampleChildRef} />
        </div>
    )
}