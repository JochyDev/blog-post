const { UserRepository } = require('../../../src/repositories');
const mockingoose = require('mockingoose');
const { User } = require('../../../src/models');

let {
    UserModelMock: {users, user}
} = require('../../mocks');


describe('User Repository Tests', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks()
    });

    test('Should return a user by id', async () => {
        const _user = { ...user };
        delete _user.password;
        mockingoose(User).toReturn(user, 'findOne');

        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.get(_user.id);
        

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);

    })
})