/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  imageOfTheFlag: 'Argentina',
  region: 'Argentina',
  capital: 'Argentina',
  subregion: 'Argentina',
  area: 'Argentina',
  population: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /country', () => {
    it('should get 200', () =>
      agent.get('/country').expect(200)
    );
  });
});
