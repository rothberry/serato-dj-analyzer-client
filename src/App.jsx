import { useContext, useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import UploadForm from "./UploadForm"
import Nav from "./Nav"
import { Context } from "./context/Context"

function App() {
	const { playlists, setPlaylists, fetchPlaylists } = useContext(Context)
	useEffect(() => {
		fetchPlaylists()
	}, [])

	return (
		<>
			<Nav />
			<Routes>
				<Route element={<UploadForm />} path="/upload" />
				<Route element={<Home />} path="/" />
			</Routes>
		</>
	)
}

export default App
