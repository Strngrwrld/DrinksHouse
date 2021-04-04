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
		
		Pageable pageable = PageRequest.of(pageDto.getPageNo(), pageDto.getPageSize(), Sort.by(pageDto.getSortBy()));
		 
        return iProductRepository.findAll(pageable);
         

	}

}
