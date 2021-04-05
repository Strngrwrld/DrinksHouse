package com.gjimenez.drinkshouseserver.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;



@ApiModel(description = "Información de productos")
@Entity
@Table(name = "product")
public class Product {

	
	@Id
	@ApiModelProperty(notes = "Identificador único del producto")
	private Integer id;
	
	@ApiModelProperty(notes = "Nombre del producto")
	private String name;
	
	@ApiModelProperty(notes = "URL de la imagen asociada al producto")
	private String url_image;
	
	@ApiModelProperty(notes = "Precio de venta del producto")
	private float price;
	
	@ApiModelProperty(notes = "Porcentaje de descuento del producto")
	private int discount;

	@ManyToOne(optional = false)
	@JoinColumn(name="category", nullable=false)
	private Category category;

	
	public Product() {
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

	public String getUrl_image() {
		return url_image;
	}

	public void setUrl_image(String url_image) {
		this.url_image = url_image;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

}
