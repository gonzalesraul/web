/* eslint no-underscore-dangle: 0 */
/* eslint no-console: 0 */
import request from 'supertest';

import User from '../../../../api/v1/models/user';

import app from '../../../../'; // api/index.js folder

const api = '/api/v1';
const apiTasks = `${api}/tasks`;

describe(`Task ${apiTasks}`, () => {
  const sectorTest = {
    title: 'Test sector',
    score: 1,
    desirableScore: 10,
  };
  beforeEach((done) => {
    User.remove({})
      .then(() => {
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  describe('delete task', () => {
    it('should not delete task on a request for a nonexistand id', () => {
      expect.hasAssertions();
      return request(app)
        .delete(`${apiTasks}/999`)
        .then((res) => {
          expect(res.status).toBe(400);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    it('should delete a task', () => {
      const userSector = new User({
        sectors: [sectorTest],
      });
      userSector.save().catch((err) => {
        console.log(err);
      });
      const sectorTestId = userSector.sectors[0]._id;
      const task = {
        text: 'test delete task',
        time: '00:30',
        sector: sectorTestId.toString(),
        matrixQuarter: 'first',
        label: sectorTest.title,
      };
      const userTask = new User({
        tasks: {
          important: [task],
        },
      });
      return userTask
        .save()
        .then((res) => {
          expect.hasAssertions();
          return request(app)
            .delete(`${apiTasks}/${res.tasks.important[0]._id}`)
            .then((result) => {
              const recevied = result.body;
              const expected = { tasks: { important: [], notImportant: [], daily: [] } };
              expect(result.status).toBe(200);
              expect(recevied).toEqual(expected);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});
