const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "Candidat" as configuration
    super({ table: "Candidat" });
  }

  // The C of CRUD - Create operation

  async create(Candidat) {
    // Execute the SQL INSERT query to add a new Candidat to the "Candidat" table
    const [result] = await this.database.query(
      `insert into ${this.table} (nom, prenom, age, region, adresse_salon, photo, photo2, email, password, selectionne ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Candidat.nom,
        Candidat.prenom,
        Candidat.age,
        Candidat.region,
        Candidat.adresse_salon,
        Candidat.photo,
        Candidat.photo2,
        Candidat.email,
        Candidat.password,
        Candidat.selectionne,
      ]
    );

    // Return the ID of the newly inserted Candidat
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Candidat by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Candidat
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Candidats from the "Candidat" table
    const [rows] = await this.database.query(`select * from ${this.table} `);

    // Return the array of Candidats
    return rows;
  }

  async readselectAll() {
    // Execute the SQL SELECT query to retrieve all Candidats from the "Candidat" table
    const [rows] = await this.database.query(
      `select * from ${this.table} where selectionne = true`
    );

    // Return the array of Candidats
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Candidat

  // async update(Candidat) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Candidat by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CandidatManager;
