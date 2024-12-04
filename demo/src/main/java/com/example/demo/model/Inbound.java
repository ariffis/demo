package com.example.demo.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity

public class Inbound {
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;  
        private Long reference; 
        private Date dateReceived;     
        private String productSku;
        private int quantity;
        private String location;
        private String remarks;
    
        // Constructors
        public Inbound(Long reference, Date dateReceived, String productSku, 
                        int quantity, String location, String remarks) {
            this.reference = reference;      
            this.dateReceived = dateReceived;
            this.productSku = productSku;
            this.quantity = quantity;
            this.location = location;
            this.remarks = remarks;
        }
    
        // Getters and Setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public Long getReference() { return reference; }
        public void setReference(Long reference) { this.reference = reference;}
        
        public Date getDateReceived() { return dateReceived; }
        public void setDateReceived(Date dateReceived) { this.dateReceived = dateReceived; }
    
        public String getProductSku() { return productSku; }
        public void setProductSku(String productSku) { this.productSku = productSku; }      
        
        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }
    
        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
    
        public String getRemarks() { return remarks; }
        public void setRemarks(String remarks) { this.remarks = remarks; }
}
