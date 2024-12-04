package com.example.demo.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Outbound{
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;  
        private Long reference; 
        private Date dateShipped;     
        private String productSku;
        private int quantity;
        private String destination;
        private String remarks;
    
        // Constructors
        public Outbound(Long reference, Date dateShipped, String productSku, 
                        int quantity, String destination, String remarks) {
            this.reference = reference;      
            this.dateShipped = dateShipped;
            this.productSku = productSku;
            this.quantity = quantity;
            this.destination = destination;
            this.remarks = remarks;
        }
    
        // Getters and Setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public Long getReference() { return reference; }
        public void setReference(Long reference) { this.reference = reference;}
        
        public Date getDateShipped() { return dateShipped; }
        public void setDateShipped(Date dateShipped) { this.dateShipped = dateShipped; }
    
        public String getProductSku() { return productSku; }
        public void setProductSku(String productSku) { this.productSku = productSku; }      
        
        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }
    
        public String getDestination() { return destination; }
        public void setDestination(String destination) { this.destination = destination; }
    
        public String getRemarks() { return remarks; }
        public void setRemarks(String remarks) { this.remarks = remarks; }
}
