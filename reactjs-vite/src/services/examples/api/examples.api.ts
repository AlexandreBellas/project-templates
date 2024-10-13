import { AxiosInstance } from "axios";
import IExampleGateway, {
    IExampleGatewayGetAnotherExampleDataRequest,
    IExampleGatewayGetAnotherExampleDataResponse,
    IExampleGatewayGetExampleDataRequest,
    IExampleGatewayGetExampleDataResponse
} from "../IExampleGateway";

interface IExamplesApiServiceProps {
    api: AxiosInstance
}

/**
 * This is the implementation of `IExampleGateway` for fetching data through an API.
 * 
 * The majority of your services will follow this example.
 */
export default class ExamplesApiService implements IExampleGateway {
    private readonly props: IExamplesApiServiceProps

    constructor(props: IExamplesApiServiceProps) {
        this.props = props
    }

    public async getExampleData(
        request: IExampleGatewayGetExampleDataRequest
    ): Promise<IExampleGatewayGetExampleDataResponse> {
        const { someNeededId } = request

        return await this.props.api
            .get(`examples/${someNeededId}`)
            .then(res => res.data)
    }
    public async getAnotherExampleData(
        request: IExampleGatewayGetAnotherExampleDataRequest
    ): Promise<IExampleGatewayGetAnotherExampleDataResponse> {
        const { someNeededId } = request

        return await this.props.api
            .get(`another-examples/${someNeededId}`)
            .then(res => res.data)
    }
}