import { useState } from "react"

const UploadForm = () => {
	const [file, setFile] = useState(null)
	const [errors, setErrors] = useState([])

	const onAddFile = (e) => {
		const acceptedTypes = ["text/plain", "text/csv"]
		const acceptedExts = [".txt", ".csv"]
		const targetFile = e.target.files[0]
		if (acceptedTypes.includes(targetFile.type)) {
			setFile(targetFile)
		} else {
			setErrors((prevState) => [
				...prevState,
				"File must be a txt or csv output from Serato",
			])
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setErrors([])
		const formData = new FormData()
		formData.append("file", file)
		console.log({ file, formData })
		// debugger
		fetch("http://127.0.0.1:5555/upload", {
			method: "POST",
			// headers: {
			// 	// "Content-Type": "application/json",
			// 	"Content-Type": "multipart/form-data",
			// },
			body: formData,
		})
			.then((res) => res.json())
			.then(console.log)
			.catch((err) => console.log({ err }))
	}
	return (
		<form onSubmit={handleSubmit}>
			<label>
				{errors.length > 0
					? errors.map((er) => <p style={{ color: "red" }}>{er}</p>)
					: null}
				Import your CSV/TXT Setlist <br />
				<input type="file" onChange={onAddFile} accept=".txt,.csv" />
				<input type="submit" value="Upload" />
			</label>
		</form>
	)
}

export default UploadForm
