package com.gjimenez.drinkshouseserver.dto;

import com.sun.istack.NotNull;

public class FiltrosDto {
	@NotNull
	private Integer categoria;
	@NotNull
	private String nombre;
	
	
	public void setCategoria(Integer categoria) {
		this.categoria = categoria;
	}
	
	public Integer getCategoria() {
		return categoria;
	}


	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public String toString() {
		return "FiltrosDto [categoria=" + categoria + ", nombre=" + nombre + "]";
	}
	
	

}
