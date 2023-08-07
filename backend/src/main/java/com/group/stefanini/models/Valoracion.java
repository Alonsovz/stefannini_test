package com.group.stefanini.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Valoracion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String comentario;

    @ManyToOne
    @JoinColumn(name="aplicacion_id")
    @JsonBackReference
    Aplicacion aplicacion;


}
