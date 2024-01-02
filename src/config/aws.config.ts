import { S3Client } from '@aws-sdk/client-s3';
import { Config } from './config';

const s3 = new S3Client({
	...Config.aws,
	region: "auto"
});
export default s3  

