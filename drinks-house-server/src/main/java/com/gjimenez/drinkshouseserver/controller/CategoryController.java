package com.gjimenez.drinkshouseserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gjimenez.drinkshouseserver.dto.ResponseDto;
import com.gjimenez.drinkshouseserver.model.Category;
import com.gjimenez.drinkshouseserver.resource.CategoryResource;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

	@Autowired
	private CategoryResource categoryResource;
	
	@GetMapping
	public ResponseEntity<ResponseDto<List<Category>>> getAll(){
		return categoryResource.getAll();
	}
}
