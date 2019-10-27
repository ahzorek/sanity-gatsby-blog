import React, { useState } from 'react';
import generate from 'nanoid/generate';

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function logUser(){
	const key = 'user__id'
	const getUser = localStorage.getItem(key)
	const [user, setUser] = useState(() => {
		let usrValue;
		try {
			usrValue = {
				isLoged: getUser !== null ? true : false,
				id: getUser,
			}
		} catch(e) { usrValue = { isLoged: false, id: null }}
		return usrValue;
	})

	if(!user.isLoged){
		const _tempId = generate(alphabet, 27)
		localStorage.setItem(key, _tempId)
		setUser({
			isLoged: true,
			id: _tempId
		})
	}	
	return [user]
}