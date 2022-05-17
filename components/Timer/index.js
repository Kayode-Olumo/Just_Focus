import React from "react";
import { FiBellOff } from "react-icons/fi";

export const Timer = ({
	tab,
	getTime,
    toggle,
	startTimer,
	timeCounter,
	second,
	isTimeUp,
	muteAlarm,
	reset,
}) => {
	const options = ["Pomodoro", "Short Break", "Long Break"];

	return (
		<div className="flex justify-center items-center flex-col w-11/12 sm:w-10/12 mx-auto pt-5 pb-5 rounded">
			<div className="flex gap-5 text-white items-center">
				{options.map((option, index) => {
					return (
						<h1
							key={index}
							className={`${
								index === tab ? "bg-gray-500 bg-opacity-30" : ""
							} p-1 rounded cursor-pointer transition-all`}
							onClick={() => toggle(index)}
						>
							{option}
						</h1>
					);
				})}
			</div>

			<div className="mt-10 mb-10">
				<h1 className="text-8xl font-bold text-white select-none m-0">
					{getTime()}:{second.toString().padStart(2, "0")}
				</h1>
			</div>
			<div className="flex items-center gap-2">
				<button
					className=" px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold"
					onClick={startTimer}
				>
					{timeCounter ? "Stop" : "Start"}
				</button>
				{isTimeUp && (
					<FiBellOff
						className="text-3xl text-white cursor-pointer"
						onClick={muteAlarm}
					/>
				)}
			</div>
			{isTimeUp && (
				<button className="uppercase text-white underline mt-5" onClick={reset}>
					Reset
				</button>
			)}
		</div>
	);
}