package com.gjimenez.drinkshouseserver.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gjimenez.drinkshouseserver.model.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer>{
	
	@Query("from Product p where p.name like %:nombre% and (p.category.id =:idCategoria or -1 =:idCategoria)")
	Page<Product> pageProduct(@Param("idCategoria") Integer idCategoria, @Param("nombre") String nombre, Pageable pageable);

}
