import { sql } from "@vercel/postgres"; //sql function is used to interact with your PostgreSQL database.
import { pgTable, integer, varchar, boolean, serial, text } from "drizzle-orm/pg-core"; //This pgTable is used to define a new PostgreSQL table within Drizzle ORM. It helps in creating table schemas in a structured way, specifying table columns and their data types.Integer :- Represents an integer data type for a table column it use to specify that a column should store integer values.similarly varchar reperesents the string data with a variable length, boolean values (true/false).
import { drizzle } from "drizzle-orm/vercel-postgres"; // means drizzle used to initialize and configure the connection to a PostgreSQL database managed by Vercel.


export const db = drizzle(sql);

export const MyTable = pgTable("drizzletable", {  //The pgTable function is used to define the schema for the todo11 table or you can say This pgTable is used to define a new PostgreSQL table within Drizzle ORM. pgTable specifies the columns and their data types, constraints (such as primaryKey and notNull), and default values.
    id: integer("id").primaryKey(),  //Defines an id column with an integer data type, which is the primary key of the table yaha id auto increment nahe hoge mtlb hum id denge 
    text: varchar("text").notNull(), // Defines a text column with a varchar data type that cannot be null.
    completed: boolean("completed").default(false), //Defines a completed column with a boolean data type and a default value of false.
});

// //create another table 
// export const UserTable = pgTable("todouser", { // todouser is the name of the table in the database
//     id : serial("id").primaryKey(), // id must be integer and serial: Represents a serial data type for a table column. A serial column in PostgreSQL is an auto-incrementing integer,. The primary key uniquely identifies each row in the table and ensures that each value in this column is unique and not null.
//     name : text("name").notNull(),
// })

//Use serial when you need an auto-incrementing column, typically for primary keys. It simplifies the setup and ensures unique, sequential values for each new row.
// Use integer for basic integer columns where auto-increment is not needed or when you want to manually manage the sequence.

//In API we can access these two tables