import { Before } from '@cucumber/cucumber';
import DBUtil from '../Utils/DBUtil.js';

Before(async function () {
    await DBUtil.deleteAllEmployees();
});
