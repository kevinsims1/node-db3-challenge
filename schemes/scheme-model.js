const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep  
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
        .then(user => {
            if(user){
                return user
            } else {
              return null;
            }
        })
}

function findSteps(id) {
    return db('schemes as s')
    .innerJoin('steps as p', 's.id', 'p.scheme_id')
    .where({ scheme_id: id })
    .select('p.step_number as step', 'p.instructions as instructions')
}

function add(scheme) {
  return db('schemes')
   .insert(scheme)  
}

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
}

function addStep(stepData, scheme_id){
    return db('steps')
        .insert({...stepData, scheme_id})
        
}
