package part3;

import java.sql.*;
import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static java.time.Instant.*;

public class QueriesExecution {

    public static void main(String[] args) throws SQLException {

//        AlunoDAO alunoDAO = new AlunoDAO();

        PostDAO postDAO = new PostDAO();
        //postDAO.listPost().forEach(System.out::println);
        Post post = new Post(
                "Marcelo dos Santos Bob", LocalDate.now(), 0,
                "JDBC Concluído", 2, UUID.randomUUID());

        //postDAO.insertPost(post);
        post.setId(1L);
        postDAO.updatePost(post);
        //postDAO.deletePost(3L);

        // =========================== 1 - Consulta =================================================
        //List<Aluno> alunos = alunoDAO.list();

//        alunos.stream().forEach(System.out::println);


        // ======================= 1.1 - Consulta com filtro ========================================
        //Aluno alunoParaConsulta = alunoDAO.getById(1);

        //System.out.println(alunoParaConsulta);


        // =========================== 2 - Inserção =================================================
        Aluno alunoParaInsercao = new Aluno(
                "Matheus",
                43,
                "SP"
        );

        //alunoDAO.create(alunoParaInsercao);


        // =========================== 3 - Delete ===================================================
        //alunoDAO.delete(1);


        // =========================== 4 - Atualizar ================================================
        //Aluno alunoParaAtualizar = alunoDAO.getById(3);
//        alunoParaAtualizar.setNome("Joaquim");
//        alunoParaAtualizar.setIdade(18);
//        alunoParaAtualizar.setEstado("RS");

        //alunoDAO.update(alunoParaAtualizar);
    }

}


