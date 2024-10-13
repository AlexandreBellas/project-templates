import { createContext, useContext, useReducer } from "react"

/**
 * @see https://react.dev/learn/passing-data-deeply-with-context
 * @see https://react.dev/learn/scaling-up-with-reducer-and-context
 */

// #region Type definitions
interface IExampleProviderProps {
    children: React.ReactNode
    exampleData: string[]
}

interface IExampleContextState {
    exampleData?: string[]
    shouldExecuteAnExampleAction: boolean
}

type IExampleContextAction = {
    type: "set-example-data"
    exampleData: string[]
} | {
    type: "clear-example-data"
} | {
    type: "mark-to-execute-example-action"
}
// #endregion

// #region Context definitions
const ExampleContext = createContext(
    {} as IExampleContextState
)

const ExampleContextDispatch = createContext(
    {} as React.Dispatch<IExampleContextAction>
)
// #endregion

// #region Hook definitions
export function useExample() {
    return useContext(ExampleContext)
}

export function useExampleDispatch() {
    return useContext(ExampleContextDispatch)
}
// #endregion

// #region Provider definition
export default function ExampleProvider({
    children,
    exampleData
}: Readonly<IExampleProviderProps>) {
    const initialState: IExampleContextState = {
        exampleData,
        shouldExecuteAnExampleAction: false
    }

    const [state, dispatch] = useReducer(ExampleReducer, initialState)

    return (
        <ExampleContext.Provider value={state}>
            <ExampleContextDispatch.Provider value={dispatch}>
                {children}
            </ExampleContextDispatch.Provider>
        </ExampleContext.Provider>
    )
}
// #endregion

// #region Reducer definition
function ExampleReducer(
    state: IExampleContextState,
    action: IExampleContextAction
): IExampleContextState {
    switch (action.type) {
        case "set-example-data": {
            return {
                ...state,
                exampleData: action.exampleData
            }
        }
        case "clear-example-data": {
            return {
                ...state,
                exampleData: []
            }
        }
        case "mark-to-execute-example-action": {
            return {
                ...state,
                shouldExecuteAnExampleAction: true
            }
        }
        default: { // even though "impossible" from the type-hints, it's a best practice to define anyway
            return state
        }
    }
}
// #endregion