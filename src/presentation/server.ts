import express, { Router } from 'express';
import path from 'path';
import cors from 'cors';
import compression from 'compression';

import { CronService } from './cron/cron-service';
import { FetchTeamService } from '../domain/use-cases/cron-fetch/fetch-team.service';
import { FetchMatchService } from '../domain/use-cases/cron-fetch/fetch-matches.service';
import { MatchRepositoryImpl } from '../infrastructure/repositories/match.repository.impl';
import { MatchDataSourceImpl } from '../infrastructure/data-source/match.data-source.impl';
import { PlayerRepositoryImpl } from '../infrastructure/repositories/player.repository.impl';
import { PlayerDataSourceImpl } from '../infrastructure/data-source/player.data-source.impl';

const playerRepository = new PlayerRepositoryImpl(new PlayerDataSourceImpl());
const matchRepository = new MatchRepositoryImpl(new MatchDataSourceImpl());

interface Options {
   port: number;
   routes: Router;
   public_path?: string;
}

export class Server {
   private app = express();
   private readonly port: number;
   private readonly publicPath: string;
   private readonly routes: Router;

   constructor(options: Options) {
      const { port, routes, public_path = 'public' } = options;

      this.port = port;
      this.publicPath = public_path;
      this.routes = routes;
   }

   async start() {
      // Middlewares
      this.app.use(express.json()); // raw
      this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
      this.app.use(compression());
      this.app.use(cors());

      // Public Folder
      this.app.use(express.static(path.join(__dirname, '../client/public')));

      // Routes
      this.app.use(this.routes);

      // SPA - React App
      this.app.get('*', (req, res) => {
         res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
      });

      // // Cron Players
      // CronService.createJob('*/15 * * * * *', () => {
      //    new FetchTeamService(
      //       playerRepository,
      //       () => console.log(`Fetched Team/Players and Stored ok`),
      //       (error: string) => console.log(error),
      //    ).execute('152');
      // });

      // // Cron Matches
      // CronService.createJob('*/15 * * * * *', () => {
      //    new FetchMatchService(
      //       matchRepository,
      //       () => console.log(`Fetched Matches and Stored ok`),
      //       (error: string) => console.log(error),
      //    ).execute('152');
      // });

      this.app.listen(this.port, () => {
         console.log(`Server running on port ${this.port}`);
      });
   }
}
