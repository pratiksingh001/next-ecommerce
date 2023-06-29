type Params = {
    id: string
}

type SeachParams = {
    name: string,
    image: string,
    unit_amount: number | null,
    id: string,
    description: string | null
    features: string
}

export type SearchParamTypes = {
    params: Params,
    searchParams: SeachParams
}