package br.com.dh.emprescar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class EmprescarApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmprescarApplication.class, args);
	}

}
