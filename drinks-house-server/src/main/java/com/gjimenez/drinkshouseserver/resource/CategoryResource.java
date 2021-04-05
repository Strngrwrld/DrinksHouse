package com.gjimenez.drinkshouseserver.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.gjimenez.drinkshouseserver.dto.ResponseDto;
import com.gjimenez.drinkshouseserver.model.Category;
import com.gjimenez.drinkshouseserver.service.ICategoryService;
import com.gjimenez.drinkshouseserver.utils.Resource;

@Component
public class CategoryResource extends Resource<List<Category>>{

	
	@Autowired
	private ICategoryService categoryService;
	
	public ResponseEntity<ResponseDto<List<Category>>> getAll(){
		ResponseDto<List<Category>> response = new ResponseDto<>();
		
		List<Category> categories =  categoryService.getAll();
		
		if(categories == null || categories.isEmpty()) {
			return empty(202,"No existen categorias" );
		}
		
		response.setCodError(200);
		response.setDesError("OK");
		response.setData(categories);
		return ok(response); 
	
	}
	
}
