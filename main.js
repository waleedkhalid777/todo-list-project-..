import inquirer from "inquirer";
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "Todoitem",
            type: "input",
            message: 'add todo item in listing ',
        },
        {
            name: "addmore",
            type: "list",
            choices: ["yes", "no"]
        }
    ]);
    // output of program
    const { Todoitem, addmore } = input;
    todos.push(Todoitem);
    if (addmore == "no") {
        console.log("Todolist");
        // add more item
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        // exit loop
        break;
    }
}
