import IExampleGateway, {
    IExampleGatewayGetAnotherExampleDataRequest,
    IExampleGatewayGetAnotherExampleDataResponse,
    IExampleGatewayGetExampleDataRequest,
    IExampleGatewayGetExampleDataResponse
} from "../IExampleGateway";
import { faker } from '@faker-js/faker';

/**
 * This is the implementation of `IExampleGateway` for *in-memory* purposes (as testing or mocking the back-end).
 */
export default class ExamplesInMemoryService implements IExampleGateway {
    private readonly exampleData: string[]

    constructor() {
        this.exampleData = Array.from(Array(faker.number.int({ min: 1, max: 2 })).keys()).map(
            () => faker.lorem.sentence()
        )
    }

    getExampleData(
        request: IExampleGatewayGetExampleDataRequest
    ): Promise<IExampleGatewayGetExampleDataResponse> {
        const { someNeededId } = request
        if (!someNeededId) return Promise.reject(new Error("An ID is necessary."))

        return Promise.resolve({ data: this.exampleData })
    }
    getAnotherExampleData(
        request: IExampleGatewayGetAnotherExampleDataRequest
    ): Promise<IExampleGatewayGetAnotherExampleDataResponse> {
        const { someNeededId } = request
        if (!someNeededId) return Promise.reject(new Error("An ID is necessary."))

        return Promise.resolve(this.exampleData)
    }
}