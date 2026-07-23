package fr.cedric.api.projects.utils;

public class SlugUtil {

    public static String generate(String text) {
        return text
                .toLowerCase()
                .replaceAll("[^a-z0-9\\s-]", "")
                .trim()
                .replaceAll("\\s+", "-");
    }

}