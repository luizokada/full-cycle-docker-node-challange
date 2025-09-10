import express from "express";
import queryDatabase from "./queryPromise";

export async function createApp() {
  const createTable = `CREATE TABLE IF NOT EXISTS people(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;
  await queryDatabase(createTable);

  const characters = [
    "Luke Skywalker",
    "Darth Vader",
    "Han Solo",
    "Chewbacca",
    "Leia Organa",
    "Obi-Wan Kenobi",
    "Yoda",
    "R2-D2",
    "C-3PO",
  ];

  const sqlInsert = "INSERT INTO `people`(`name`) VALUES (?)";

  for (const character of characters) {
    await queryDatabase(sqlInsert, [character]);
  }

  const app = express();

  app.get("/", async (req, res) => {
    const selectCharacters = "SELECT * FROM `people`";

    const allCharacters = await queryDatabase(selectCharacters);

    const html = `<h1>Full Cycle Rocks!</h1>\n
  <ul>
    ${allCharacters
      .map((character: { name: string }) => {
        return `<li>${character.name}</li>`;
      })
      .join("")}
  </ul>`;
    res.send(html);
  });
  return app;
}
