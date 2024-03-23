package auth

import (
	"github.com/enockzaake/server-monitor/db"
	"github.com/enockzaake/server-monitor/types"
	"github.com/google/uuid"
	_ "github.com/mattn/go-sqlite3"
	"golang.org/x/crypto/bcrypt"
)

func RegisterUser(user types.User) error {
	id := uuid.New().String()
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	_, err = db.DB.Exec("INSERT INTO users (id, first_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)",
		id, user.FirstName, user.LastName, user.Email, string(hashedPassword))
	if err != nil {
		return err
	}

	return nil
}
	
func AuthenticateUser(email, password string) (bool, error) {
	var hashedPassword string
	err := db.DB.QueryRow("SELECT password FROM users WHERE email = ?", email).Scan(&hashedPassword)
	if err != nil {
		return false, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	if err != nil {
		if err == bcrypt.ErrMismatchedHashAndPassword {
			return false, nil // Password does not match
		}
		return false, err // Other error
	}

	return true, nil // Password matches
}