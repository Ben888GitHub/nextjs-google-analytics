import { useState } from 'react';
import Page from '../components/Page';
import * as gtag from '../lib/google-analytics';

function Contact() {
	const [message, setMessage] = useState('');

	const handleInput = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = () => {
		gtag.event({
			action: 'submit',
			category: 'contact',
			label: 'submit',
			value: message
		});
		setMessage('');
	};

	return (
		<Page>
			<h1>This is Contact Page</h1>
			<div>
				<span>Message:</span>
				<textarea onChange={handleInput} value={message} />
			</div>
			<button onClick={handleSubmit}>Submit</button>
		</Page>
	);
}

export default Contact;
