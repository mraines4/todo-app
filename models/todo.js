const db = require('./conn');

class ToDo {
    constructor(id, content, status) {
        this.id = id;
        this.content = content;
        this.status = status;
    }

    static getById(id) {
        return db.one(`select * from todos where id=${id}`)
            .then((toDoData) => {
                return new ToDo(toDoData.id, toDoData.content, toDoData.status);
            })
            .catch(() => {
                return null;
            })
    }

    save() {
        return db.result(`
        update todos set
            content='${this.content}',
            status='${this.status}'
        where id=${this.id}
        `)
    }
};

module.exports = ToDo;