const BaseRepository = require("../repositories/base.repository");

let _commetRepository = null;
let _ideaRepository = null;


class CommnetService extends BaseRepository{
    constructor({ CommentRepository, IdeaRepository }){
        super(CommentRepository);
        _commetRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    async getIdeaComments(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be sent';
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId);

        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be sent';
            throw error;
        }

        const { comments } = idea;
        return comments;
    }

    async createComment(comment, ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be sent';
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId);

        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be sent';
            throw error;
        }

        const createComment = await _commetRepository.create(comment);
        idea.comment.push(createComment);

        return await _ideaRepository.update(ideaId, { comment: idea.comment });

    }
};

module.exports = CommnetService;