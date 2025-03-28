CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  document VARCHAR(11) NOT NULL UNIQUE
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  number VARCHAR(11) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  client_id INT REFERENCES clients(id),
  carrier_id INT REFERENCES carriers(id)
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  phone_id INT REFERENCES phones(id),
  amount NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);