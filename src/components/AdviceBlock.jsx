import axios from "axios";
import DiceIcon from "../icons/DiceIcon";
import { API_URL } from "../../config.js";
import { useEffect, useState } from "react";

const AdviceBlock = () => {
	const [quote, useQuote] = useState({});

	useEffect(() => {
		handleCallQuote();
	}, []);

	const handleCallQuote = async () => {
		axios
			.get(`${API_URL}/quotes`)
			.then((response) => {
				const { id,text_body } = response.data;
				useQuote({id,text_body:text_body});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="w-auto rounded bg-[#313a49] px-[30px]  pt-[40px] text-center text-white sm:w-[500px]">
			<span className="text-md mb-[30px] tracking-widest text-[#53ffab]">
				Consejo #{quote.id || 1}
			</span>
			<p className="mb-[30px] text-[28px] text-[#cee3e8]">{quote.text_body || "La venganza nunca es buena, mata el alma y la envenena."}</p>
			<div className='h-[16px] bg-[url("assets/pattern-divider-mobile.svg")] bg-center bg-no-repeat md:bg-[url("assets/pattern-divider-desktop.svg")]'></div>
			<button
				onClick={handleCallQuote}
				className="h-[64px] w-[64px] translate-y-[32px] rounded-full bg-[#53ffab] text-center hover:rotate-180 transition duration-500"
			>
				<DiceIcon classes={"m-auto"} />
			</button>
		</div>
	);
};

export default AdviceBlock;
