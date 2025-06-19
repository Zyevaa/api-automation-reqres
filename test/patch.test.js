const axios = require('axios');
const {expect} = require('chai');

describe('PATCH Update User', () => {
    it('status 200 & job updated', async () => {
        const response = await axios.patch(
            'https://reqres.in/api/users/2',
            {
            job: `Senior QA`
        },
        {
            headers: {
                'x-api-key':'reqres-free-v1'
            }
        }
        );
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('job', 'Senior QA');
    });
});
