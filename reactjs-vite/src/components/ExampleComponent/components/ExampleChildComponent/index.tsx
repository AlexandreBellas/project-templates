/**
 * This is the simplest component you'd implement in a project. It just has a static JSX (no dynamism).
 * 
 * It is rare to have components like this, so this example is to illustrate when there are no states, callbacks,
 * effects, etc => no need to use `#region`/`#endregion`.
 */
export default function ExampleChildComponent() {
    return (
        <div>
            Example simple child component
        </div>
    )
}