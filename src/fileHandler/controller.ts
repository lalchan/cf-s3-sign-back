import { GetObjectCommand } from "@aws-sdk/client-s3";
import { Request , Response} from "express";
import s3 from "../config/aws.config";
import { getSignedUrl }  from "@aws-sdk/s3-request-presigner";
import { Config } from "../config/config";

function createPresignedUrlWithClient (key : string) {
	const command = new GetObjectCommand({ Bucket: Config.aws.bucket, Key: key });
	return getSignedUrl(s3, command, { expiresIn: 3600 });
};


function signUrl(path: string) : Promise<string> {
	return createPresignedUrlWithClient(path);
}

export function get() {
	return async (req: Request,res: Response) => {
		console.log(req.path)
		// remove first character '/' from path
		const path = req.path.slice(1);
		res.json({
			signedUrl: await  signUrl(path),
			"pre-message": "readme first",
			message: `Hello World!, to get a signed url to the known file in the test bucket add 'course/1.1/out.m3u8' to path` ,
		})
	};
};
