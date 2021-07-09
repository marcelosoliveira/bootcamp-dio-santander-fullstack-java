package postgreSQL;

import classes.User;
import classes.User_;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.UUID;

public class ExecPostgresUser {

    public static void main(String[] args) {

        EntityManagerFactory entityManagerFactory = Persistence
                .createEntityManagerFactory("user-postgres");

        EntityManager entityManager = entityManagerFactory.createEntityManager();

        User user = new User("Marcelo dos Santos",
                "bob", "12345678");

        User user1 = new User("SagaChelo",
                "saga", "12345678");

        User user2 = new User("Ricardo Galow",
                "galo", "12345678");

        entityManager.getTransaction().begin();
        entityManager.persist(user);
        entityManager.persist(user1);
        entityManager.persist(user2);
        entityManager.getTransaction().commit();

        User findUser = entityManager.find(User.class, user1.getId());
        System.out.println("Inserindo o usuário: " + findUser);

        entityManager.getTransaction().begin();
        findUser.setUsername("Saga mulecote");
        findUser.setName("Sgaraio mano veio");
        entityManager.getTransaction().commit();

        System.out.println("Alterando o usuário: " + findUser);

        entityManager.getTransaction().begin();
        entityManager.remove(user2);
        entityManager.getTransaction().commit();


        List<User> listUser = entityManager.createNativeQuery(
                "SELECT * FROM users", User.class).getResultList();
        listUser.forEach(System.out::println);

        User userJPQL = entityManager
                .createQuery("select u from User u where name = :name", User.class)
                .setParameter("name", user.getName())
                .getSingleResult();
        System.out.println(userJPQL);

        CriteriaQuery<User> criteriaUsersList = entityManager.getCriteriaBuilder().createQuery(User.class);
        Root<User> userRootList = criteriaUsersList.from(User.class);
        List<User> criteriaListUsers = entityManager.createQuery(criteriaUsersList).getResultList();
        criteriaListUsers.forEach(users -> System.out.println(users));

        CriteriaQuery<User> userCriteriaQuery = entityManager.getCriteriaBuilder().createQuery(User.class);
        Root<User> userRoot = userCriteriaQuery.from(User.class);
        CriteriaBuilder.In<UUID> inClause = entityManager.getCriteriaBuilder().in(userRoot.get(User_.id));
        inClause.value(user1.getId());
        userCriteriaQuery.select(userRoot).where(inClause);
        User userAPICriteria = entityManager.createQuery(userCriteriaQuery).getSingleResult();
        System.out.println(userAPICriteria);

        entityManager.close();
        entityManagerFactory.close();
    }

}
