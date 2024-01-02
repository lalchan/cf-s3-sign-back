import { bootstrapApplication } from './app';
import { errorHandler } from './common/functions/express';
import { Config } from './config/config';
import { mainRouter } from './router';

const app = bootstrapApplication();
const port = Config.port;

app.use(mainRouter);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Application started at port ${port}`);
});
