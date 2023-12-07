import fs from 'fs';
import path from 'path';
import { Client } from 'pg';
import { envs } from '../../config/envs';

const client = new Client({
   user: envs.POSTGRES_USER,
   host: 'localhost',
   database: envs.POSTGRES_DB,
   password: envs.POSTGRES_PASSWORD,
   port: envs.POSTGRES_PORT,
});

client.connect();

const sql = fs.readFileSync(path.join(__dirname, '../../sql/setup-db/create-tables.sql'), 'utf8');

client.query(sql, (err, res) => {
   if (err) {
      console.error('Error executing SQL script:', err);
      process.exit(1);
   }
   console.log('Tables created successfully!');
   client.end();
});
