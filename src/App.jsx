import { useState } from "react"
import Calculator from "./components/Calculator"
import Header from "./components/Header"
import Result from "./components/Result"

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 1000,
		annualInvestment: 1500,
		expectedReturn: 5,
		duration: 10,
	})

	const durationIsValid = userInput.duration > 0

	const handleUserInput = (inputKey, newValue) => {
		setUserInput((existingUserInput) => {
			return {
				...existingUserInput,
				[inputKey]: Number(newValue),
			}
		})
	}
	return (
		<>
			<Header />
			<Calculator userInput={userInput} handleUserInput={handleUserInput} />
			{durationIsValid ? (
				<Result resultInput={userInput} />
			) : (
				<p className="center">Masukkan durasi diatas 0</p>
			)}
		</>
	)
}

export default App
