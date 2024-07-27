import React from "react";

function article_1() {
	return {
		date: "16 April 2024",
		title: "First place in FinHack 2024 (Financial Hackathon)",
		description:
			"Viswaretas Kotra and Co. recieved 1st place out of 30 teams in the FinHack 2024 (Financial Hackathon) competition at the Jindal School of Management, UT Dallas.",
		keywords: [
			"Fintech",
			"hackathon",
			"AI in finance",
			"UT Dallas",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div style={{ width: '100%', height: '1000px', border: '1px solid black' }}>
					 <iframe 
						src={"https://jindal.utdallas.edu/news/finhack-2024-challenges-and-encourages-ut-dallas-students/"} 
						title={"First place in FinHack 2024 (Financial Hackathon)"} 
						style={{ width: '100%', height: '100%' }} 
						frameBorder="0"
					></iframe>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "12 August 2023",
		title: "How to Build a Simple and Elegant React Website in 30 Minutes",
		description:
			"Have you ever wanted to create your own website from scratch, but felt overwhelmed by the complexity and jargon of web development? Well now there's a simple way to do it!",
		style: ``,
		keywords: [
			"React",
			"Website framework",
			"Elegant design",
			// "Tharindu Nayanajith",
		],
		body: (
				<div>
					<a href="https://medium.com/p/132b92cc0dd5" target="_blank" rel="noopener noreferrer">
						How to Build a Simple and Elegant React Website in 30 Minutes
					</a>
				</div>

			),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
