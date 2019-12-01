package org.sf57.ebook.security;

public class NavItem {

    private String name;
    private String route;
    private String icon;

    public NavItem(String name, String route, String icon) {
        this.name = name;
        this.route = route;
        this.icon = icon;
    }

    public String getName() {
        return name;
    }

    public NavItem setName(String name) {
        this.name = name;
        return this;
    }

    public String getRoute() {
        return route;
    }

    public NavItem setRoute(String route) {
        this.route = route;
        return this;
    }

    public String getIcon() {
        return icon;
    }

    public NavItem setIcon(String icon) {
        this.icon = icon;
        return this;
    }
}
