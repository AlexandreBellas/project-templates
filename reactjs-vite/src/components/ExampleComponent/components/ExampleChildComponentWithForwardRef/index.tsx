import { forwardRef, useMemo } from "react";

interface IExampleChildComponentWithForwardRefProps {
    exampleAttr: string
}

/**
 * This is an example when a `ref` is necessary in a child component. It is necessary to use `forwardRef`.
 * 
 * Heads up to the `export default` difference: here we use `const Component = (...)` and later
 * `export default Component` (other components without `forwardRef` would just be
 * `export default function Component(...) {...}`). This format is only **when the `ref` is necessary** => there's no
 * need to overload all components with this.
 */
const ExampleChildComponentWithForwardRef = forwardRef<
    HTMLDivElement,
    Readonly<IExampleChildComponentWithForwardRefProps>
>(({
    exampleAttr
}, ref) => {
    // #region Memos
    const exampleMemo = useMemo(() => "suppose a heavy calculation here", [])
    // #endregion

    return (
        <div ref={ref}>
            {exampleAttr} {exampleMemo}
        </div>
    )
})

ExampleChildComponentWithForwardRef.displayName = "ExampleChildComponentWithForwardRef"

export default ExampleChildComponentWithForwardRef