// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ResultGetters } from 'services/api/IApi';
import type { NextApiRequest, NextApiResponse } from 'next'
const { publicRuntimeConfig } = getConfig();
import getConfig from "next/config";
import { IWeather } from 'libs/data';
const {
    WEATHER_API_BASEURL
} = publicRuntimeConfig

type Data = IWeather | Error

const weather_url = `${WEATHER_API_BASEURL}location/`

const getWeather = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {    
    const {id} = req.query;
    if(id == "undefined") return res.status(500).end();
    const url = `${weather_url}${id}`

    const [error, data] = await getResults(await fetch(url));
    if (error) return res.status(500).json(error);

    return res.status(200).json(data);
}

const getResults: ResultGetters = async (response) => {
    if (!response.ok) return [new Error(response.statusText), null];
    const data = await response.json();
    return [null, data]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            return getWeather(req, res);
            break;
        default:
            res.status(405).json(new Error("Method not allowed"));
            break;
    }
}
