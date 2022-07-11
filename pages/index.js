import Head from 'next/head';
import Image from 'next/image';
import Page from '../components/Page';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Page>
				<h1>Next.js Google Analytics</h1>
				<h2>Using Google Analytics in Next.js Script</h2>
			</Page>
		</div>
	);
}
