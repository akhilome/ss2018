# Learn SQL


## Lesson 1 : Manipulation

Relational databases are those which organize information inot one or more tables. Tables are collections of data organized into rows and columns; where the column is a set of data values of a particular type and a row is a single record in the table. A few clauses and statements touched on in this section:

### `CREATE TABLE` 

Creates a new table. For example ...

```sql
CREATE TABLE demo (
  col1 INTEGER,
  col2 REAL, 
  col3 TEXT
);

```
... creates a new table called `demo` with the following DB Schema:

|      |      |
| ---- | ---- |
| col1 | INTEGER |
| col2 | TEXT |
| col3 | TEXT |

### `INSERT INTO`

Inserts a new row into table. For example ...

```sql
INSERT INTO demo (col1, col2, col3) 
VALUES (1, 'Item 1', 'Item 1 desc');

```
... modifies the table into: 

| col1 | col2 | col3 |
| ---- | ---- | ---- |
| 1    | Item 1 | Item 1 desc |

### `SELECT`

fetches data from a database. `SELECT` statements always return a new table called the _'result set'_. For example ...

```sql
SELECT * FROM demo;
```
... returns all columns from the `demo` table while ...

```sql
SELECT col2 FROM demo;
```

... returns the `col2` column from the `demo` table.

### `UPDATE`

edits a row in the table. This is used for changing existing records. For example ...

```sql
UPDATE demo
SET col3 = 'Just gibberish'
WHERE col1 = 1;
```
... mutates the tables as thus:

| col1 | col2 | col3 |
| ---- | ---- | ---- |
| 1    | Item 1 | Just gibberish |

### `ALTER TABLE`

add new columns to the table. For example ...

```sql
ALTER TABLE demo 
ADD COLUMN col4 TEXT;
```

... add a new column (`col4`) to the `demo` table.

### `DELETE FROM`

deletes rows from tables. For example ...

```sql
DELETE FROM demo 
WHERE col1 = 1;
```

... removes the first row.