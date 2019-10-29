//movies.js

const isDev = process.env.NODE_ENV && process.env.NODE_ENV == 'development'

if(isDev){ 
	require('dotenv').config({ path: `.env.development`})
}

const __key = process.env.GATSBY_TMDB_KEY
const axios = require('axios')

exports.handler = function (event, context, callback){
	const { id, type } = event.queryStringParameters
	const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${__key}&language=pt-BR`
	axios.get(url)
		.then(({data}) => {
				callback( null, {
					statusCode: 200,
					headers: {
						'Access-Control-Allow-Origin': 'http://localhost:8000',
		        'Access-Control-Allow-Headers': 'XMLHttpRequest, Content-Type, application/json',
		        'Access-Control-Allow-Methods': 'GET, POST',
		        'Access-Control-Allow-Credentials': 'true'
					},
					body: JSON.stringify(data),
				})
		})
		.catch(err => {
			console.log(err)
			callback( 
				new Error('Houve um erro ao processar a solicitação.')
			)
		})
}