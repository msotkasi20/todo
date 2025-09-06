drop table if exists task;
drop table if exists account;
CREATE TABLE task ( id SERIAL PRIMARY KEY, description VARCHAR(255) NOT NULL );
CREATE TABLE account ( id SERIAL PRIMARY KEY, email varchar(50) not null unique, password varchar(255) not null);
INSERT INTO task (description) VALUES
('Complete the project dosumentation'),
('Review the code changes'),
('Prepare for the team meeting'),
('Update the project timeline'),
('Test the new fetures'),
('Fix the reported bugs'),
('Deploy the application to production'),
('Conduct a code review with peers');