const db = require('./conn');

class commishModel {
    constructor(id, name, slug, year) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.year = year;
    }
    static async getAll() {
        const response = await db.any(`SELECT * FROM nba_commissioners;`);
        return response;
    }
    static async getBySlug(slug) {
        const response = await db.one(`SELECT * FROM nba_commissioners WHERE slug = '${slug}';`);
        return response;
    }
}

module.exports = commishModel;