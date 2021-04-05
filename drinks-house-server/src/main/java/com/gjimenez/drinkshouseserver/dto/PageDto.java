package com.gjimenez.drinkshouseserver.dto;

public class PageDto {

	private int pageNo;
	private int pageSize;
	private String sortBy;
	private FiltrosDto filtros;
	
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public String getSortBy() {
		return sortBy;
	}
	public void setSortBy(String sortBy) {
		this.sortBy = sortBy;
	}
	public FiltrosDto getFiltros() {
		return filtros;
	}
	public void setFiltros(FiltrosDto filtros) {
		this.filtros = filtros;
	}
	
	
	
}
