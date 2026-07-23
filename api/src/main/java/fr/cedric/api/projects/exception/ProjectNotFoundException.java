package fr.cedric.api.projects.exception;

public class ProjectNotFoundException extends RuntimeException {

    private static final String CODE = "PROJECT_NOT_FOUND";

    public ProjectNotFoundException(String slug) {
        super("Project not found: " + slug);
    }

    public String getCode() {
        return CODE;
    }
}