<<<<<<< HEAD
from fastapi import FastAPI
from pydantic import BaseModel
import psycopg2

app = FastAPI()

class Contact(BaseModel):
    name: str
    email: str
    message: str

def get_conn():
    return psycopg2.connect(
        dbname="mydb",
        user="postgres",
        password="Charren30!",
        host="localhost",
        port="5432"
    )

@app.post("/Arven-Lagawan")
def contact_form(data: Contact):
    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO contact_messages (name, email, message)
        VALUES (%s, %s, %s);
    """, (data.name, data.email, data.message))

    conn.commit()
    cur.close()
    conn.close()

    return {"status": "success", "msg": "Message saved!"}
=======
from fastapi import FastAPI
from pydantic import BaseModel
import psycopg2

app = FastAPI()

class Contact(BaseModel):
    name: str
    email: str
    message: str

def get_conn():
    return psycopg2.connect(
        dbname="mydb",
        user="postgres",
        password="Charren30!",
        host="localhost",
        port="5432"
    )

@app.post("/index.html")
def contact_form(data: Contact):
    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO contact_messages (name, email, message)
        VALUES (%s, %s, %s);
    """, (data.name, data.email, data.message))

    conn.commit()
    cur.close()
    conn.close()

    return {"status": "success", "msg": "Message saved!"}
>>>>>>> 1fa523fce0dff7442b6b9e3945dcd426ac3e83ee
