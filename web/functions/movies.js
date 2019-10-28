//movies.js

if(process.env.NODE_ENV && process.env.NODE_ENV == 'development'){
	require('dotenv').config({
	  path: `.env.development`
	})	
}


const __key = process.env.GATSBY_TMDB_KEY
const axios = require('axios')

exports.handler = function (event, context, callback){
	const url = `https://api.themoviedb.org/3/movie/${event.body}?api_key=${__key}&language=pt-BR`
	axios.get(url)
		.then(({data}) => {
				callback( null, {
					statusCode: 200,
					body: JSON.stringify(data),
				})
		})
		.catch(err => {
			console.log(err)
			callback( new Error('Não foi dessa vez!'))
		})
}