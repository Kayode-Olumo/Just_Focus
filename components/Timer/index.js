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
			<div className="relative w-full max-w-lg" style={{
			zIndex: "-1",
			}}>
				<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-1000" />
				<div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000" />
				<div className="absolute top-0 -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blobanimation-delay-4000" />
			</div>
			<div className="flex gap-5 text-black items-center">
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
				<h1 className="text-8xl font-bold text-black select-none m-0">
					{getTime()}:{second.toString().padStart(2, "0")}
				</h1>
			</div>
			<div className="flex items-center gap-2">
				<button
					className=" px-16 py-2 text-2xl rounded-md text-white uppercase font-bold opacity-70"
					style={{
						background: "grey"
					}}
					onClick={startTimer}
				>
					{timeCounter ? "Stop" : "Start"}
				</button>
				{isTimeUp && (
					<FiBellOff
						className="text-3xl text-black cursor-pointer"
						onClick={muteAlarm}
					/>
				)}
			</div>
			{isTimeUp && (
				<button className="uppercase text-black underline mt-5" onClick={reset}>
					Reset
				</button>
			)}
		</div>
	);
}