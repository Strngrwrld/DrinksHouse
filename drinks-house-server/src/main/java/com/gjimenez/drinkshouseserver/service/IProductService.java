package com.gjimenez.drinkshouseserver.service;

import org.springframework.data.domain.Page;

import com.gjimenez.drinkshouseserver.dto.PageDto;
import com.gjimenez.drinkshouseserver.model.Product;

public interface IProductService {
	
	public Page<Product> getProducts(PageDto pageDto);

}
