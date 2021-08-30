// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ResultGetters } from 'services/api/IApi';
import type { NextApiRequest, NextApiResponse } from 'next'
const { publicRuntimeConfig } = getConfig();
import getConfig from "next/config";
import { ILocation } from 'libs/data';
const {
    WEATHER_API_BASEURL
} = publicRuntimeConfig

type Data = ILocation[]|Error

type SearchQuery = {
    search: string
}
const location_url = `${WEATHER_API_BASEURL}location/search`

const getLoaction = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {

    const {
        search
    } = req.query as SearchQuery
    if (!search) return res.status(200).json([])

    const fetchUrl = new URL(location_url)
    fetchUrl.searchParams.set("query", search);
    
    const [error, data] = await getResults(await fetch(fetchUrl.toString()));
    if(error) return res.status(500).json(error);

    res.status(200).json(data);
}

const getResults: ResultGetters = async (response) => {
    if (!response.ok) return [new Error(response.statusText), null];
    const locations = await response.json();
    return [null, locations]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            return getLoaction(req, res);
            break;
        default:
            res.status(405).json(new Error("Method not allowed"));
            break;
    }
}
