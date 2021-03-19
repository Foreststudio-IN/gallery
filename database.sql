CREATE database cuteanimalsdb;

CREATE TABLE animals(
    animal_id SERIAL PRIMARY KEY,
    link VARCHAR(255),
    type VARCHAR(30)
);