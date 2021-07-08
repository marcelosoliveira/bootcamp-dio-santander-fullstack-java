package part3;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class PostDAO {

    public List<Post> listPost() {
        List<Post> post = new ArrayList<>();

        try (Connection connection = ConnectionFactory.getConnection()) {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    "SELECT * FROM post");
            ResultSet resultSet = preparedStatement.executeQuery();

            while(resultSet.next()) {
                post.add(new Post(
                        resultSet.getLong("id"),
                        resultSet.getString("author"),
                        LocalDate.parse(resultSet.getString("created_at")),
                        resultSet.getInt("down_count"),
                        resultSet.getString("text"),
                        resultSet.getInt("up_count"),
                        UUID.fromString(resultSet.getString("user_id"))));
            }
        }catch (SQLException s) {
            System.out.println("Listagem do post falhou!");
            s.printStackTrace();
        }

        return post;
    }

    public void deletePost(Long id) throws SQLException {
        Post post =  new Post();

        try(Connection connection = ConnectionFactory.getConnection()) {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    "DELETE FROM post WHERE id = ?");
            preparedStatement.setLong(1, id);

            int rowsAffect = preparedStatement.executeUpdate();

            System.out.println("Delete do post foi realizado com sucesso " + rowsAffect + " ok");
        } catch (SQLException s) {
            System.out.println("Falha em deletar um post");
            s.printStackTrace();
        }

    }

    public void insertPost(Post post) {

        try (Connection connection = ConnectionFactory.getConnection()) {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    "INSERT INTO post(author, created_at, down_count, text, up_count, user_id) " +
                            "VALUES(?, ?, ?, ?, ?, ?)");

            preparedStatement.setString(1, post.getAuthor());
            preparedStatement.setDate(2, Date.valueOf(post.getCreatedAT()));
            preparedStatement.setInt(3, post.getDownCount());
            preparedStatement.setString(4, post.getText());
            preparedStatement.setInt(5, post.getUpCount());
            preparedStatement.setObject(6, post.getUserId());

            int rowsAffects = preparedStatement.executeUpdate();
            System.out.println("Criação do post feita com sucesso " + rowsAffects + " ok");
        } catch (SQLException s) {
            System.out.println("Falha em criar um post");
            s.printStackTrace();
        }
    }

    public void updatePost(Post post) {
        try(Connection connection = ConnectionFactory.getConnection()) {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    "UPDATE post SET author = ?, created_at = ?, text = ? WHERE id = ? "
            );

            preparedStatement.setString(1, post.getAuthor());
            preparedStatement.setDate(2, Date.valueOf(LocalDate.now()));
            preparedStatement.setString(3, post.getText());
            preparedStatement.setLong(4, post.getId());

            int rowsAffected = preparedStatement.executeUpdate();
            System.out.println("Post atualizado com sucesso " + rowsAffected + " ok");
        } catch (SQLException s) {
            System.out.println("Falha em atualizar um post");
            s.printStackTrace();
        }
    }

}
