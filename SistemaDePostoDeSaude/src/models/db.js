const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE postos_saude (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    endereco TEXT NOT NULL
  );`);

  db.run(`CREATE TABLE medicos (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    especialidade TEXT NOT NULL,
    posto_id INTEGER,
    FOREIGN KEY(posto_id) REFERENCES postos_saude(id)
  );`);

  db.run(`CREATE TABLE medicamentos (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    quantidade INTEGER NOT NULL,
    posto_id INTEGER,
    FOREIGN KEY(posto_id) REFERENCES postos_saude(id)
  );`);
});

module.exports = db;
