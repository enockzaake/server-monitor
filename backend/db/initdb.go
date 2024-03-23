package db

import (
	"database/sql"

	"os"
	"path/filepath"

	_ "github.com/mattn/go-sqlite3"
)

var DB *sql.DB

func InitDB() (*sql.DB,error){
	var err error
	DB,err = sql.Open("sqlite3","./db/database.sqlite3")
	if err != nil {
		return nil,err
	}

	// Read SQL schema from file
	schema, err := os.ReadFile(filepath.Join("db", "schema.sql"))
	if err != nil {
		return nil,err
	}
	_, err = DB.Exec(string(schema))
    if err != nil {
        return nil,err
    }

    return DB,nil
}
