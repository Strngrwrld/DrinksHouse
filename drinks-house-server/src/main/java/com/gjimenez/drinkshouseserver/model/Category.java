package com.gjimenez.drinkshouseserver.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;



@ApiModel(description = "Información de categorias de productos")
@Entity
@Table(name = "category")
public class Category {
	
	@Id
	@ApiModelProperty(notes = "Id de categorias")
	private Integer id;
	

	@ApiModelProperty(notes = "descripción de categorias")
	@Size(min = 1, max = 255, message = "campo debe tener max 255 caracteres")
	@Column(name = "name", nullable = false, length = 255)
	private String name;
	
	public Category() {
		super();
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
