import React, { useState } from 'react';
import generate from 'nanoid/generate';

import {isBrowser} from './helpers'

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function logUser(){
	const key = 'user__id'
	const [user, setUser] = useState(() => {
		let usrValue;
		try {
			usrValue = {
				isLoged: isBrowser() && localStorage.getItem(key) !== null ? true : false,
				id: isBrowser() && localStorage.getItem(key),
			}
		} catch(e) { usrValue = { isLoged: false, id: null }}
		return usrValue;
	})

	if(!user.isLoged){
		const _tempId = generate(alphabet, 27)
		isBrowser() && localStorage.setItem(key, _tempId)
		setUser({
			isLoged: true,
			id: _tempId
		})
	}	
	return [user]
}