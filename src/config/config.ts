import { config } from 'dotenv';
import { join } from 'path';

config({
	path: join(__dirname, '..', '..', '.env'),
});

export class Config {
	constructor() {
		throw new Error('This is an static class.');
	}
	static readonly port: number = this.parseInt(this.getFromEnv('PORT'));
	static readonly nodeEnv: string = this.parseString(
		this.getFromEnv('NODE_ENV'),
	);
	static readonly aws = {
		credentials: {
			accessKeyId: this.parseString(this.getFromEnv('AWS_ACCESS_KEY_ID')),
			secretAccessKey: this.parseString(
				this.getFromEnv('AWS_SECRET_ACCESS_KEY'),
			),
		},
		bucket: this.parseString(this.getFromEnv('AWS_BUCKET')),
		endpoint: this.parseString(this.getFromEnv('AWS_ENDPOINT')),
	}

	private static getFromEnv(key: string) {
		return process.env[key];
	}

	private static parseInt(value: string | undefined): number {
		if (!value) {
			throw new Error('Some integer Config is missing');
		}
		const parsedValue = parseInt(value);
		if (isNaN(parsedValue)) {
			throw new Error('THis config is not of correct type');
		}
		return parsedValue;
	}

	private static parseString(value: string | undefined): string {
		if (!value) {
			throw new Error('Some string Config is missing');
		}
		return value;
	}
}
