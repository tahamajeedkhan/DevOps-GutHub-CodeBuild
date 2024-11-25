// app.test.js

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js'; // Correctly import the app from index.js

chai.use(chaiHttp);
const { expect } = chai;

describe('Express Routes', () => {
    it('should return a 200 status on the homepage', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome to the homepage!');
                done();
            });
    });

    it('should return a 200 status on the about page', (done) => {
        chai.request(app)
            .get('/about')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('About Us');
                done();
            });
    });

    it('should return a 200 status on the contact page', (done) => {
        chai.request(app)
            .get('/contact')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Contact Us');
                done();
            });
    });

    it('should return a 500 status on the error page', (done) => {
        chai.request(app)
            .get('/error')
            .end((err, res) => {
                expect(res).to.have.status(500);
                expect(res.text).to.equal('Internal Server Error');
                done();
            });
    });
});