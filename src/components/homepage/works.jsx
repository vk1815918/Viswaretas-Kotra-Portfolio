import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						
						<div className="work">
							<img
								src="./arch_capital_management.jpg"
								alt="arch_capital"
								className="work-image"
							/>
							<div className="work-title">Arch Capital Management</div>
							<div className="work-subtitle">
								Quantitative Trader
							</div>
							<div className="work-duration">May 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./university_of_texas_at_dallas_logo.jpg"
								alt="utd"
								className="work-image"
							/>
							<div className="work-title">TxACE (Texas Analog Center of Excellence)</div>
							<div className="work-subtitle">
								Undergraduate AI/ML Researcher
							</div>
							<div className="work-duration">Jan 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./r1649_logo.jpg"
								alt="r1649"
								className="work-image"
							/>
							<div className="work-title">R1649 Equity Partners</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Sep 2023 - Present</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
