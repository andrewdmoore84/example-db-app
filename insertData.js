const { pool } = require("./db");

async function insertData() {
  const [ todoDescription, dueDate = null, alreadyCompleted = false ] = process.argv.slice(2);

  try {
    const result = await pool.query(
      "INSERT INTO todos (description, due_on, is_completed) VALUES ($1, $2, $3)",
      [todoDescription, dueDate, alreadyCompleted]
    );

    console.log(`Added a todo: ${todoDescription}, due on ${dueDate}, already completed is ${alreadyCompleted}`);
  } catch (error) {
    console.error(error);
  }

  await pool.end();
}

insertData();

