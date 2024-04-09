#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgBlueBright.bold("Welcome to Haseeb Naeem to do list app"));
while(conditions) {
    let options = await inquirer.prompt([
        {
            name: "userOption",
            type: "list",
            message: "Please select an option",
            choices: ["Add", "Remove"],
        }
    ])
    if(options.userOption === "Add") {
        let addTask = await inquirer.prompt([
            {
               name: "task",
               type: "input",
               message: "Enter task to add in your to do list",
            }
        ])
        if(addTask.task !== 0) {
            todoList.push(addTask.task)
            console.log(`${addTask.task} has been successfully added in your do do list`)
        }else {
            console.log("please enter a task to add in your to do list");
        }
    }
    if(options.userOption === "Remove") {
        let removeTask = await inquirer.prompt([
            {
                name: "removeItem",
                type: "list",
                message: "Select a task to remove",
                choices: todoList,
            }
        ])
        let removeIndex = todoList.indexOf(removeTask.removeItem)
        if(removeIndex >= 0) {
            todoList.splice(removeIndex, 1)
            console.log("you removed", removeTask.removeItem)
            console.log(todoList);
        }
    }
    let task = await inquirer.prompt([
        {
            name: "moreTask",
            type: "confirm",
            message: "Do you want to add more task in your to do list ?",
            default: "false",
        }
    ])
    conditions = task.moreTask;
 }
 console.log("your updated to do list is", todoList );