const axios = require('axios');
const {expect} = require('chai');

describe('POST Create User', () => {
    it('status 201 & name = Aneline', async () => {
        const res = await axios.post(
            'https://reqres.in/api/users',
            {
            name: 'Aneline',
            job: `QA Engineer`
            },
        {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }
        );
        expect(res.status).to.equal(201);
        expect(res.data).to.have.property('name', 'Aneline');
    });
});