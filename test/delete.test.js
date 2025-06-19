const axios = require('axios');
const {expect} = require('chai');

describe('DELETE User', () => {
    it('status 204', async () => {
        const res = await axios.delete(
            'https://reqres.in/api/users/2',
            {
                headers: {
                    'x-api-key': `reqres-free-v1`
                }
            }
        );
        expect(res.status).to.equal(204);
    });
});