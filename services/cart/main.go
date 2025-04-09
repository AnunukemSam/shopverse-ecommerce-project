package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type CartItem struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	UserID    string             `json:"userId"`
	ProductID string             `json:"productId"`
	Quantity  int                `json:"quantity"`
}

var collection *mongo.Collection

func initDB() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	clientOptions := options.Client().ApplyURI(os.Getenv("MONGO_URI"))
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}

	collection = client.Database("shopverse-cart").Collection("cart_items")
	fmt.Println("Connected to MongoDB!")
}

func getCartItems(c *gin.Context) {
	var items []CartItem
	cursor, err := collection.Find(context.TODO(), bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cursor.Close(context.TODO())
	for cursor.Next(context.TODO()) {
		var item CartItem
		cursor.Decode(&item)
		items = append(items, item)
	}
	c.JSON(http.StatusOK, items)
}

func addToCart(c *gin.Context) {
	var item CartItem
	if err := c.BindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	fmt.Printf("📦 Inserting item: %+v\n", item)

	result, err := collection.InsertOne(context.TODO(), item)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	item.ID = result.InsertedID.(primitive.ObjectID)
	c.JSON(http.StatusCreated, item)
}

func removeFromCart(c *gin.Context) {
	id := c.Param("id")
	objID, _ := primitive.ObjectIDFromHex(id)
	_, err := collection.DeleteOne(context.TODO(), bson.M{"_id": objID})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusNoContent, nil)
}

func main() {
	initDB()
	router := gin.Default()
	
	router.GET("/cart", getCartItems)
	router.POST("/cart", addToCart)
	router.DELETE("/cart/:id", removeFromCart)

	port := os.Getenv("PORT")
	if port == "" {
		port = "3002"
	}

	router.Run(":" + port)
}
