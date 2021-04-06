package com.gjimenez.drinkshouseserver.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gjimenez.drinkshouseserver.dto.PageDto;
import com.gjimenez.drinkshouseserver.dto.ResponseDto;
import com.gjimenez.drinkshouseserver.model.Product;
import com.gjimenez.drinkshouseserver.resource.ProductResource;

@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	private ProductResource productResource;
	
	@PostMapping
	public ResponseEntity<ResponseDto<Page<Product>>> getProducts(@RequestBody @Valid PageDto pageDto, BindingResult result){
		return productResource.getProducts(pageDto,result);
	}
}
