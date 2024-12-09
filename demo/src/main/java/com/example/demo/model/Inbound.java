package com.example.demo.model;

import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name="inbound")
public class Inbound {
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "inbound_id") 
        private Long id;
        private String reference;
        @Column(name = "date_received")  
        private Date dateReceived;
        @Column(name = "product_sku")    
        private String productSku;
        private int quantity;
        private String location;
        private String remarks;
    
        public Inbound() {    }
        // Constructors
        public Inbound(String reference, Date dateReceived, String productSku, 
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

        public String getReference() { return reference; }
        public void setReference(String reference) { this.reference = reference;}
        
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
