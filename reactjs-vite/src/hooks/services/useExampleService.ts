import axios from "axios";
import IExampleGateway from "../../services/examples/IExampleGateway";
import { useMemo } from "react";
import ExamplesApiService from "../../services/examples/api/examples.api";

/**
 * This is the definition of the hook to use the example remote service defined in `IExampleGateway`.
 * 
 * Here is where you define how you'd like to inject your dependency to the components. The example shows for the API
 * situation, but below there is the commented code for using the in-memory case.
 */
export function useExampleService(): IExampleGateway {
    // You can also import the axios instance from another file if needed
    const api = axios.create({
        baseURL: "http://example.com",
        headers: {
            Authorization: "Bearer 12345"
        }
    })

    return useMemo(() => new ExamplesApiService({ api }), [api])
}

/**********************************************************************************************************************/

// import ExamplesInMemoryService from "../../services/examples/in-memory/examples.in-memory";
// import IExampleGateway from "../../services/examples/IExampleGateway";
// import { useMemo } from "react";

// const service = new ExamplesInMemoryService()

// export function useExampleService(): IExampleGateway {
//     return useMemo(() => service, [])
// }