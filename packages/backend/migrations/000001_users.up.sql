CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	username varchar(254) NULL,
	created_at varchar NOT NULL DEFAULT now(),
	CONSTRAINT users_pk PRIMARY KEY (id),
	CONSTRAINT users_un UNIQUE (username)

);