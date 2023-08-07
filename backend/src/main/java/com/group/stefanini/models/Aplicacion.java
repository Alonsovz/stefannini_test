package com.group.stefanini.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Aplicacion {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Integer id;

    String nombreAplicacion;

    Integer calificacionAplicacion;

    Double precioAplicacion;

    String descripcionAplicacion;

    @ManyToOne
    @JoinColumn(name="categoria_id")
    @JsonIgnore
    Categoria categoria;


    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "aplicacion"
    )
    @JsonManagedReference
    List<Valoracion> valoraciones;


    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "aplicacion",
            fetch = FetchType.LAZY
    )
    @JsonManagedReference
    List<ScreenShot> screenShots;

    String imagenPrincipal;
    String author;
    Boolean instalado;
}
