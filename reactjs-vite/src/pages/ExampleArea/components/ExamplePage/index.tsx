import { useEffect } from "react"
import { useExample, useExampleDispatch } from "../../contexts/ExampleProvider"

/**
 * This is an example of a very common page you'd have in a project.
 * 
 * It's very likely to have a root context provider to be used in this page (and the subsequent child components). Also,
 * here will be the biggest work to be done in the project. Although not being a hard limit, aiming to a maximum of 150
 * lines per component will make your code better.
 */
export default function ExamplePage() {
    // #region Contexts
    const { exampleData } = useExample()
    const exampleDispatch = useExampleDispatch()
    // #endregion

    // #region Effects
    useEffect(() => {
        if (exampleData?.length) return
        exampleDispatch({ type: "mark-to-execute-example-action" })
    }, [exampleData?.length, exampleDispatch])
    // #endregion

    if (!exampleData) return <></> // You could return another component or just a loading state here

    return (
        <div className="flex flex-row flex-wrap">
            {exampleData.map((i, idx) => (
                <p key={`${i}-${idx}`}>
                    {i}
                </p>
            ))}
        </div>
    )
}