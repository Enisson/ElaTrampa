package com.squad53.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad53.data.model.Vaga;
import com.squad53.repository.VagaRepository;



@RestController
@RequestMapping({"/vagas"})
public class VagaController {
	
	private VagaRepository repository;
	
	VagaController(VagaRepository vagaRepository){
		this.repository = vagaRepository; 
	}
	
	@GetMapping
	public List<?> findAll() {
		return repository.findAll();
	}
	
	@GetMapping(path = {"/{vagaid}"})
	public ResponseEntity<Vaga> findById(@PathVariable long vagaid){
		return repository.findById(vagaid)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping 
	public Vaga create(@RequestBody Vaga vaga) {
		return repository.save(vaga);
	}
	
	@PutMapping(value="/{vagaid}")
	public ResponseEntity<Vaga> update(@PathVariable("vagaid") long vagaid,
			@RequestBody Vaga vaga){
		return repository.findById(vagaid)
				.map(record -> {
					record.setTituloVaga(vaga.getTituloVaga());
					record.setDescricaoVaga(vaga.getDescricaoVaga());
					Vaga updated = repository.save(record);
					return ResponseEntity.ok().body(updated);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping(path={"/{vagaid}"})
	public ResponseEntity<?> delete(@PathVariable("vagaid") long vagaid){
	return repository.findById(vagaid)
			.map(record ->{
				repository.deleteById(vagaid);
				return ResponseEntity.ok().build();
			}).orElse(ResponseEntity.notFound().build());
}

}
