package main

import (
	"context"
	"crypto/sha256"
	"encoding/hex"

	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

type Body struct {
	Message string `form:"message" json:"message" binding:"required"`
}

func getClient() *redis.Client {
	res := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "",
		DB:       0,
	})

	return res
}

func main() {
	r := gin.Default()
	r.GET("/sha256", func(c *gin.Context) {
		id := c.Query("id")
		client := getClient()
		message, err := client.Get(ctx, id).Result()
		if err == redis.Nil {
			c.JSON(404, gin.H{
				"status": "error",
				"error": "Not found"
			})
			return
		} else if err != nil {
			c.JSON(500, gin.H{
				"status": "error",
				"error":  err.Error(),
			})
			panic(err)
		}
		c.JSON(200, gin.H{
			"status":  "success",
			"id":      id,
			"message": message,
		})
	})
	r.POST("/sha256", func(c *gin.Context) {
		var json Body
		c.BindJSON(&json)
		message := json.Message
		if len(message) < 8 {
			c.JSON(400, gin.H{
				"status": "error",
				"error":  "message was too short",
			})
			panic("message was too short")
		}
		sha := sha256.Sum256([]byte(message))
		id := hex.EncodeToString(sha[:])
		client := getClient()
		err := client.Set(ctx, id, message, 0).Err()
		if err != nil {
			c.JSON(500, gin.H{
				"status": "error",
				"error":  err.Error(),
			})
			panic(err)
		}
		c.JSON(200, gin.H{
			"status":  "success",
			"id":      id,
			"message": message,
		})
	})
	r.Run(":8080") // listen and serve on 0.0.0.0:8080
}
