const supertest = require('supertest');
const app = require('../../server');

jest.mock('../../utils/createToken', () => () => '19mob');

describe('/POST auth', () => {
  it('should be response with token', (done) => {
    supertest(app)
    .post('/auth')
    .send({ email: 'bruno.mcortez@gmail.com', password: '123456' })
    .set('Accept', 'application/json')
    .end((err, res) => {
      console.log(res);
      expect(res.body.token).toEqual('19mob');
      done();
    });
  });
});
