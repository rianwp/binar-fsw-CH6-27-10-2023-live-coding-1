import "./Calculator.css"

const Calculator = ({ handleUserInput, userInput }) => {
	return (
		<form id="user-input">
			<div className="input-group">
				<p>
					<label>Inisial Investasi</label>
					<input
						type="number"
						value={userInput.initialInvestment}
						onChange={(e) =>
							handleUserInput("initialInvestment", e.target.value)
						}
					/>
				</p>
				<p>
					<label>Investasi Tahunan</label>
					<input
						type="number"
						value={userInput.annualInvestment}
						onChange={(e) =>
							handleUserInput("annualInvestment", e.target.value)
						}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Perkiraan Balik Modal</label>
					<input
						type="number"
						value={userInput.expectedReturn}
						onChange={(e) => handleUserInput("expectedReturn", e.target.value)}
					/>
				</p>
				<p>
					<label>Durasi</label>
					<input
						type="number"
						value={userInput.duration}
						onChange={(e) => handleUserInput("duration", e.target.value)}
					/>
				</p>
			</div>
		</form>
	)
}

export default Calculator
