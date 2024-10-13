import { useEffect, useState } from "react"
import ExampleEmptyPage from "./components/ExampleEmptyPage"
import ExampleProvider from "./contexts/ExampleProvider"
import ExamplePage from "./components/ExamplePage"
import { useExampleService } from "../../hooks/services/useExampleService"

/**
 * Here you'd implement a group of pages that make sense to be together.
 * 
 * Let's say you have a dashboard section where you can navigate through the graphs and configuration pages. This "area"
 * would be the entry point to all these pages.
 * If your system would include user management pages too, you'd have a `UserManagementArea` as the entry point.
 */
export default function ExampleArea() {
    // #region States
    const [isLoading, setIsLoading] = useState(false)
    const [exampleData, setExampleData] = useState<string[]>()
    // #endregion

    // #region Services
    const exampleService = useExampleService()
    // #endregion

    // #region Effects
    useEffect(() => {
        if (exampleData) return

        setIsLoading(true)

        exampleService.getExampleData({ someNeededId: "123" })
            .then((response) => {
                setExampleData(response.data)
            })
            .catch(() => {
                setExampleData([])
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [exampleData, exampleService])
    // #endregion

    if (isLoading || !exampleData) return <></> // @TODO: create a component for a loading state

    if (exampleData.length === 0) return <ExampleEmptyPage />

    return (
        <ExampleProvider exampleData={exampleData}>
            <ExamplePage />
        </ExampleProvider>
    )
}