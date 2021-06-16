import { CronJob } from 'cron';
import moment from 'moment';
import { getRepository } from 'typeorm';
import Exame from '../models/Exame';

function task(): void {
  const job = new CronJob(
    '* * */23 * * *',
    async () => {
      const repository = getRepository(Exame);

      const resultExame = await repository.find({
        where: { status: 'Agendado' },
      });

      for (let i = 0; i < resultExame.length; i++) {
        const dateAdd1Day = moment(resultExame[i].data_realizacao)
          .add('1', 'day')
          .format('YYYY-MM-DD');

        if (
          dateAdd1Day === moment().format('YYYY-MM-DD') &&
          resultExame[i].status === 'Agendado'
        ) {
          await repository.update(resultExame[i].id_exame, {
            status: 'Cancelado',
          });
        }
      }
    },
    null,
    true,
    'America/Sao_Paulo',
  );
}

task();

export { task };
