const { UserService } = require('../../../src/services');
const { UserRepositoryMock } = require('../../mocks');

const { 
    UserModelMock: { user, users }
} = require('../../mocks');

describe('User service', () => {
    beforeEach( () => {
        jest.clearAllMocks();
    })

    it('Shold find a user by id', async() => {
        const UserRepository = UserRepositoryMock;
        UserRepository.get.mockReturnValue(user);

        const _userService = new UserService({ UserRepository });
        const expected = await _userService.get(user._id);
        expect(expected).toMatchObject(user)
    })
})
