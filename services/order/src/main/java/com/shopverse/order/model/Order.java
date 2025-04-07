package com.shopverse.order.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "orders")
public class Order {

    @Id
    private String id;
    private String userId;
    private List<String> productIds;
    private double totalAmount;
    private Date createdAt = new Date();

    // Getters and setters omitted for brevity

    // You can auto-generate these using Lombok or IDE support
}
