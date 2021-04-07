package com.gjimenez.drinkshouseserver.resource;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;

import com.gjimenez.drinkshouseserver.dto.PageDto;
import com.gjimenez.drinkshouseserver.dto.ResponseDto;
import com.gjimenez.drinkshouseserver.model.Product;
import com.gjimenez.drinkshouseserver.service.IProductService;
import com.gjimenez.drinkshouseserver.utils.Resource;

@Component
public class ProductResource extends Resource<Product> {

	@Autowired
	private IProductService iProductService;

	public ResponseEntity<ResponseDto<Page<Product>>> getProducts(PageDto pageDto, BindingResult result) {
		ResponseDto<Page<Product>> response = new ResponseDto<>();

		if (result.hasErrors()) {
			List<String> errors = result.getFieldErrors().stream()
					.map(err -> "El campo '" + err.getField() + " " + err.getDefaultMessage())
					.collect(Collectors.toList());
			
			return emptyPage(errors);
				
		}

		System.out.println(pageDto.toString());

		Page<Product> pagedResult = iProductService.getProducts(pageDto);

		if (!pagedResult.hasContent()) {
			return emptyPage(203, "No existen productos");
		}

		response.setCodError(200);
		response.setDesError("OK");
		response.setData(pagedResult);
		return okPage(response);

	}

}
