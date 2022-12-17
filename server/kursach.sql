CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT('STUDENT')
);

create TABLE disciplines(
    id SERIAL PRIMARY KEY,
    discipline_name VARCHAR(255) NOT NULL
);

create TABLE lessons(
    id SERIAL PRIMARY KEY,
    date_lesson DATE NOT NULL,
    time_lesson TIME NOT NULL,
    discipline_id INTEGER,
    FOREIGN KEY (discipline_id) REFERENCES disciplines(id)
);

create TABLE departments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

create TABLE positions(
    id SERIAL PRIMARY KEY,
    name_position VARCHAR(255) NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

create TABLE companys(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    telephone INTEGER,
    INN INTEGER 
);

create TABLE students(
    Birth_date DATE NOT NULL,
    Obrazovanie VARCHAR(255),
    FIO VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL,
    company_id INTEGER NOT NULL,
    position_id INTEGER NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(company_id) REFERENCES companys(id),
    FOREIGN KEY(position_id) REFERENCES positions(id)
);

create TABLE teachers(
    FIO VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL,
    discipline_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (discipline_id) REFERENCES disciplines(id)
);

create TABLE exams(
    id SERIAL PRIMARY KEY,
    mark VARCHAR(255),
    date_exam DATE,
    time_exam TIME,
    sotr_disc INTEGER NOT NULL,
    user_id INTEGER NOT NULL
    FOREIGN KEY (user_id) REFERENCES users(id)
);

create TABLE marks(
    exam_id INTEGER NOT NULL,
    FOREIGN KEY (exam_id) REFERENCES exams(id)
);

create TABLE baskets(
    user_id INTEGER NOT NULL,
    lesson_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

create TABLE personals(
    telephone  INTEGER,
    passport INTEGER,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

create TABLE sotr_disc(
    user_id INTEGER,
    discipline_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (discipline_id) REFERENCES disciplines(id)
);