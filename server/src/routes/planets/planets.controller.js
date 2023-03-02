const planets=require('../../models/planets.model');

function getAllPlanets(req,res){
    return res.statu(200).json(planets);
}

module.exports={
    getAllPlanets,
}