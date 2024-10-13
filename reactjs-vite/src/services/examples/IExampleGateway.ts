// #region DTOs
export interface IExampleGatewayGetExampleDataRequest {
    someNeededId: string
}

export interface IExampleGatewayGetExampleDataResponse {
    data: string[]
}

export interface IExampleGatewayGetAnotherExampleDataRequest {
    someNeededId: string
}

export type IExampleGatewayGetAnotherExampleDataResponse = string[]
// #endregion

/**
 * This is the definition of the interface for interacting with remote services.
 * 
 * It will work for dependency injection in your components through the hook `useExampleService()`. The hook will choose
 * the current implementation to be used. Make sure to **always** define your return types as `Promise<>`.
 * 
 * After understanding this file, go to the folders `api` and `in-memory` present in the containing folder.
 */
export default interface IExampleGateway {
    getExampleData(
        request: IExampleGatewayGetExampleDataRequest
    ): Promise<IExampleGatewayGetExampleDataResponse>

    getAnotherExampleData(
        request: IExampleGatewayGetAnotherExampleDataRequest
    ): Promise<IExampleGatewayGetAnotherExampleDataResponse>
}