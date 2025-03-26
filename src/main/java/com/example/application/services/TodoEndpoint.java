package com.example.application.services;

import com.example.application.data.Todo;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import jakarta.annotation.Nonnull;

import java.util.Arrays;
import java.util.List;


@BrowserCallable
@AnonymousAllowed
public class TodoEndpoint {

    TodoService todoService;

    public TodoEndpoint(TodoService todoService) {
        this.todoService = todoService;
    }

    public List<Todo> getTodos() {
        return todoService.getTodos();
    }

    public List<Todo> getTodosMock() {
        return Arrays.asList(
                new Todo(1L, "Buy milk", false),
                new Todo(2L, "Buy eggs", false),
                new Todo(3L, "Buy bread", false));
    }
}
