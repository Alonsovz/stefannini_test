package com.group.stefanini.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ValueGenerationType;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="categoria_id")
    Integer id;

    @Column(name="categoria_nombre")
    String categoriaNombre;


    @Column(name="categoria_estado")
    Boolean categoriaEstado;

    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "categoria"
    )
    List<Aplicacion> aplicaciones;


}
