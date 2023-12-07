import { Pool } from 'pg';
import { envs } from '../../config/envs';

const pool = new Pool({
   user: envs.POSTGRES_USER,
   host: 'localhost',
   database: envs.POSTGRES_DB,
   password: envs.POSTGRES_PASSWORD,
   port: envs.POSTGRES_PORT,
});

export default pool;
