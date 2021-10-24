package main

import (
	"context"
	// "fmt"

	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func getClient() *redis.Client {
	// connStr := ""
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
		val, err := client.Get(ctx, id).Result()
		if err == redis.Nil {
			c.JSON(404, gin.H{
				"status": "not found",
				id:       id,
			})
		} else if err != nil {
			c.JSON(500, gin.H{
				"status": "error",
				"error":  err.Error(),
			})
			panic(err)
		}
		c.JSON(200, gin.H{
			"status": "getted",
			id:       id,
			val:      val,
		})
	})
	r.POST("/sha256", func(c *gin.Context) {
		id := c.Param("id")
		message := c.PostForm("message")
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
			"status":  "posted",
			"message": message,
		})
	})
	r.Run(":8080") // listen and serve on 0.0.0.0:8080
}
