import { createContext, useEffect, useState } from "react"

export const Context = createContext()
const BASE_URL = "http://localhost:5555"

const ContextProvider = (props) => {
	const [playlists, setPlaylists] = useState([])

	const fetchPlaylists = () => {
		fetch(BASE_URL + "/playlists")
			.then((r) => r.json())
			.then((playlistData) => {
				if (!playlistData.errors) {
					setPlaylists(playlistData)
				}
			})
			.catch((err) => console.log({ err }))
	}

	const store = {
		testing: "test",
		playlists,
		setPlaylists,
    fetchPlaylists
	}

	return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider
