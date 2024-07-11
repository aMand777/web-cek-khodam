import { CronJob } from 'cron';

const job = new CronJob(
  '00 00 00 * * *', // cronTime
  async function () {
    await fetch(`${process.env.BASE_API_URL}/visitorcekkhodam.json?auth=${process.env.API_KEY}`, {
      method: 'DELETE',
    });
  },
  null, // onComplete
  true, // start
  'Asia/Jakarta', // timeZone
);

export default job;
