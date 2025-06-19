const axios = require('axios');
const {expect} = require('chai');

describe('GET Single User', () => {
    it('status 200 & id = 2', async () => {
        const res = await axios.get('https://reqres.in/api/users/2');
        expect(res.status).to.equal(200);
        expect(res.data.data).to.have.property('id', 2);
    });
});