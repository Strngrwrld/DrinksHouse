package com.gjimenez.drinkshouseserver.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.gjimenez.drinkshouseserver.dto.PageDto;
import com.gjimenez.drinkshouseserver.dto.ResponseDto;
import com.gjimenez.drinkshouseserver.model.Product;
import com.gjimenez.drinkshouseserver.service.IProductService;
import com.gjimenez.drinkshouseserver.utils.Resource;

@Component
public class ProductResource extends Resource<Product>{
	
	@Autowired
	private IProductService iProductService;
	

	public ResponseEntity<ResponseDto<Page<Product>>> getProducts(PageDto pageDto){
		ResponseDto<Page<Product>> response = new ResponseDto<>();
		
		Page<Product> pagedResult = iProductService.getProducts(pageDto);
		
		if(!pagedResult.hasContent()) {
			return emptyPage(203,"No existen productos" );
		}
		
		response.setCodError(200);
		response.setDesError("OK");
		response.setData(pagedResult);
		return okPage(response); 
	
	}

}
