package main

import (
    "encoding/json"
    "net/http"
)

type User struct {
    ID   int    `json:"id"`
    Name string `json:"name"`
}

func main() {
    http.HandleFunc("/api/users", func(w http.ResponseWriter, r *http.Request) {
        users := []User{
            {ID: 1, Name: "ベジータ"},
            {ID: 2, Name: "ザーボン"},
        }
        w.Header().Set("Content-Type", "application/json")
        w.Header().Set("Access-Control-Allow-Origin", "*") // CORS対策
        json.NewEncoder(w).Encode(users)
    })

    http.ListenAndServe(":8080", nil)
}

func handleUserRegister(w http.ResponseWriter, r *http.Request) {
    if r.Method != "POST" {
        w.WriteHeader(http.StatusMethodNotAllowed)
        return
    }

    var user User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    // 登録処理（ここではログ出力だけ）
    println("登録されたユーザー:", user.Name)

    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.WriteHeader(http.StatusCreated)
}
