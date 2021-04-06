package com.gjimenez.drinkshouseserver.dto;

import com.sun.istack.NotNull;

public class PageDto {

	@NotNull
	private int pageNo;
	@NotNull
	private int pageSize;
	@NotNull
	private String sortBy;
	@NotNull
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
	
	
	@Override
	public String toString() {
		return "PageDto [pageNo=" + pageNo + ", pageSize=" + pageSize + ", sortBy=" + sortBy + ", filtros=" + filtros
				+ "]";
	}
	
	
	
	
	
}
