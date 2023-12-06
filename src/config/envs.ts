import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
   PORT: get('PORT').required().asPortNumber(),
   PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
   APIFOOTBAL_URL: get('APIFOOTBAL_URL').required().asString(),
   APIFOOTBAL_KEY: get('APIFOOTBAL_KEY').required().asString(),
};
