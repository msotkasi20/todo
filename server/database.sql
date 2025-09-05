CREATE TABLE task ( id SERIAL PRIMARY KEY, description VARCHAR(255) NOT NULL );
INSERT into task (description) values
('Complete the project dosumentation'),
('Review the code changes'),
('Prepare for the team meeting'),
('Update the project timeline'),
('Test the new fetures'),
('Fix the reported bugs'),
('Deploy the application to production'),
('Conduct a code review with peers');
