// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const ToDo = require('../models/todo');

// describe('Sanity check', function() {
//     it('should be 2', function() {
//         // assert.equal(2, 1+1);
//         expect(1+1).to.equal(2);
//     });
// });

describe('todo model', () => {
    it('should give todo by id', async () => {
        const theTodo = await ToDo.getById(1);
        console.log(theTodo)
        expect(theTodo).to.be.an.instanceOf(ToDo);
    })

    it('should be able to mark as pending', async() => {
        const theTodo = await ToDo.getById(1);
        theTodo.status = 'pending';
        await theTodo.save();
        const alsoTheTodo = await ToDo.getById(1);
        expect(alsoTheTodo.status).to.be.equal('pending');
    })

    it('should be able to mark as done', async() => {
        const theTodo = await ToDo.getById(1);
        theTodo.status = 'done';
        await theTodo.save();
        const alsoTheTodo = await ToDo.getById(1);
        expect(alsoTheTodo.status).to.be.equal('done');
    })
});