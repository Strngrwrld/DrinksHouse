package com.gjimenez.drinkshouseserver.utils;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.gjimenez.drinkshouseserver.dto.ResponseDto;

public abstract class Resource<E> {


	protected ResponseEntity<ResponseDto<E>> ok(ResponseDto<E> response) {
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
	
	protected ResponseEntity<ResponseDto<Page<E>>> okPage(ResponseDto<Page<E>> response) {
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

	protected ResponseEntity<ResponseDto<E>> empty(int error, String mensaje) {
		ResponseDto<E> response = new ResponseDto<>();
		response.setCodError(error);
		response.setDesError(mensaje);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
	
	protected ResponseEntity<ResponseDto<Page<E>>> emptyPage(int error, String mensaje) {
		ResponseDto<Page<E>> response = new ResponseDto<>();
		response.setCodError(error);
		response.setDesError(mensaje);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
	protected ResponseEntity<ResponseDto<E>> empty(List<String> errors) {
		ResponseDto<E> response = new ResponseDto<>();
		response.setCodError(201);
		response.setDesError("Request invalido");
        response.setErrors(errors);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
