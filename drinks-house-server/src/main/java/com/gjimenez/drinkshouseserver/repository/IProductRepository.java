package com.gjimenez.drinkshouseserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gjimenez.drinkshouseserver.model.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer>{
	
	

}
