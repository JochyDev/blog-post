const { IdeaController } = require(".");


let _ideaService = null;

class ideaController {
    constructor(ideaService){
        _ideaService = ideaService;
    }

    async get(req, res){
        const { ideaId } = req.params;
        const idea = await _ideaService.get(ideaId);
        return res.send(idea);
    }

    async getAll(req, res){
        const ideas = await _ideaService.getAll();

        return res.send(ideas);
    }

    async create(req, res){
        const { body } = req;
        const createIdea = await _ideaService.create(body);
        return res.status(201).send(createIdea);
    }

    async update(req, res){
        const { body } = req;
        const { ideaId } = req.params;
        const updateIdea = await _ideaService.update(ideaId, body);

        return res.send(updateIdea);
    }

    async delete(req,res){
        const {ideaId} = req.params;
        const deleteIdea = await _ideaService.delete(ideaId)

        return res.send(deleteIdea);
    }

    async getUserIdeas( req, res ){
        const { author } = req.params;
        const ideas = await _ideaService.getUsersIdea(author);

        return res.send(ideas);
    }

    async upvoteIdea( req, res ){
        const { ideaId } = req.params;
        const idea = await _ideaService.upvoteIdea(ideaId);

        return res.send(idea);
    }

    async downvoteIdea( req, res ){
        const { ideaId } = req.params;
        const idea = await _ideaService.downvoteIdea(ideaId);

        return res.send(idea);
    }

}

module.exports = ideaController;