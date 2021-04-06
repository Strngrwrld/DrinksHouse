package com.gjimenez.drinkshouseserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.gjimenez.drinkshouseserver.dto.PageDto;
import com.gjimenez.drinkshouseserver.model.Product;
import com.gjimenez.drinkshouseserver.repository.IProductRepository;

@Service
public class ProductService implements IProductService {
	
	@Autowired
	private IProductRepository iProductRepository;

	@Override
	public Page<Product> getProducts(PageDto pageDto) {
		
		
		Pageable pageable = null;
		Sort sort = null;
		switch (pageDto.getSortBy()) {
		case "1":
			sort = Sort.by("name").ascending();	
			break;
		case "2":
			sort = Sort.by("name").descending();
			break;
		case "3":
			sort = Sort.by("price").descending();	
			break;
		case "4":
			sort =  Sort.by("price").ascending();	
			break;
		default:
			sort = Sort.by("name").ascending();
			break;
		}

		pageable = PageRequest.of(pageDto.getPageNo(), pageDto.getPageSize(),sort);
		
        return iProductRepository.pageProduct(pageDto.getFiltros().getCategoria(),pageDto.getFiltros().getNombre(),pageable);
         

	}

}
