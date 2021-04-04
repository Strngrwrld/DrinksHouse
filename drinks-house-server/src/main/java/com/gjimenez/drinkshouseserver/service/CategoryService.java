package com.gjimenez.drinkshouseserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gjimenez.drinkshouseserver.model.Category;
import com.gjimenez.drinkshouseserver.repository.ICategoryRepository;

@Service
public class CategoryService  implements ICategoryService{

	@Autowired
	ICategoryRepository categoryRepository;

	@Override
	public List<Category> getAll() {
		
		return categoryRepository.findAll();
	
	}
	
	
	
}
