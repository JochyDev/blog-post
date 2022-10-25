const BaseRepository = require('./base.repository');

let _commet = null;

class CommentRepository extends BaseRepository {
    constructor({Comment}){
        super(Comment);
        _commet = Comment;
    }
}

module.exports = CommentRepository;