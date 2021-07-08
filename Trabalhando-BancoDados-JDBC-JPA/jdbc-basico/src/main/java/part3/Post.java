package part3;

import java.time.LocalDate;
import java.util.UUID;

public class Post {

    private Long id;
    private String author;
    private LocalDate createdAt;
    private Integer downCount;
    private String text;
    private Integer upCount;
    private UUID userId;

    public Post() {
    }

    public Post(String author, LocalDate createdAt, Integer downCount, String text,
                Integer upCount, UUID userId) {
        this.author = author;
        this.createdAt = createdAt;
        this.downCount = downCount;
        this.text = text;
        this.upCount = upCount;
        this.userId = userId;
    }

    public Post(Long id, String author, LocalDate createdAt, Integer downCount,
                String text, Integer upCount, UUID userId) {
        this.id = id;
        this.author = author;
        this.createdAt = createdAt;
        this.downCount = downCount;
        this.text = text;
        this.upCount = upCount;
        this.userId = userId;


    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDate getCreatedAT() {
        return createdAt;
    }

    public void setCreatedAT(LocalDate createdAT) {
        this.createdAt = createdAT;
    }

    public Integer getDownCount() {
        return downCount;
    }

    public void setDownCount(Integer downCount) {
        this.downCount = downCount;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getUpCount() {
        return upCount;
    }

    public void setUpCount(Integer upCount) {
        this.upCount = upCount;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", createdAT=" + createdAt +
                ", downCount=" + downCount +
                ", text='" + text + '\'' +
                ", upCount=" + upCount +
                ", userId=" + userId +
                '}';
    }
}
