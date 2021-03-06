# Software notions checklist

> Once you can name something, you've gained power over it.

This repository offers a list of notions that many experienced software developers find to be valuable.
The goal is to help programmers who feel the need to improve their craft, but don't know where to look - because they cannot put a name on what concepts they're lacking.

_**This is not a tutorial.**_
If you don't know the first thing about programming, you are not ready for this list yet.
Go find a tutorial / teacher and build something.
After a few months, as you get more experience and your projects grow, the notions presented here will become more and more relevant to you.

_**This is not an encyclopedia.**_
It's a portal: the goal is to be broad, not deep. 
There are already many excellent learning resources available for each of these topics; 
we will do our best to provide references to some of them. 
Hopefully this list gives you enough keywords so that you can do your own research efficiently.

_**You don't need to master the whole list to start building something.**_
We do not claim that these notions are a prerequisite to succeeding in software.
We know however that as software projects grow, these notions become more and more valuable.

_**Contributions are welcome.**_
If you have suggestions to make this resource better, please open a Github issue, or send an email to `val.vvalval@gmail.com`.

## Table of Contents

* [General notions:](#general-notions)
  * [syntax vs semantics](#syntax-vs-semantics)
  * [functions / procedures / methods](#functions--procedures--methods)
  * [polymorphism, interface / implementation](#polymorphism-interface--implementation)
  * [abstraction](#abstraction)
  * [low-level, high-level](#low-level-high-level)
  * [applications, libraries, application libraries, standard library](#applications-libraries-application-libraries-standard-library)
  * [static (resolved by code analysis) vs dynamic (resolved when program executes)](#static-resolved-by-code-analysis-vs-dynamic-resolved-when-program-executes)
  * [validation, coercion](#validation-coercion)
  * [code organization: modules & namespaces](#code-organization-modules--namespaces)
  * [type systems](#type-systems)
  * [mutation](#mutation)
  * [variables: names vs references](#variables-names-vs-references)
  * [types of programs: server, GUI, script, data processing, CLI, REPL lib](#types-of-programs-server-gui-script-data-processing-cli-repl-lib)
  * [API & clients](#api--clients)
  * [producer and consumer](#producer-and-consumer)
  * [state](#state)
* [Architecture:](#architecture)
  * [the Optimization Metaphor: goals, constraints, and local optima](#the-optimization-metaphor-goals-constraints-and-local-optima)
  * [design patterns](#design-patterns)
  * [separation of concerns / orthogonality / simplicity / complecting](#separation-of-concerns--orthogonality--simplicity--complecting)
  * [essential vs incidental complexity](#essential-vs-incidental-complexity)
  * [loose coupling](#loose-coupling)
  * [code cohesion](#code-cohesion)
  * [composability](#composability)
  * [idempotency ★](#idempotency-)
  * [environment coupling ★](#environment-coupling-)
  * [componentization / IoC](#componentization--ioc)
* [Under the Hood:](#under-the-hood)
  * [computer internals: processors, CPU, RAM, disks, IO](#computer-internals-processors-cpu-ram-disks-io)
  * [the Stack and the Heap](#the-stack-and-the-heap)
  * [memory management & garbage collection](#memory-management--garbage-collection)
  * [compilation & interpretation](#compilation--interpretation)
  * [runtimes / VMs](#runtimes--vms)
  * [machine code, assembly](#machine-code-assembly)
* [Software services:](#software-services)
  * [storage](#storage)
  * [I/O, network protocols](#io-network-protocols)
  * [operating systems](#operating-systems)
  * [queues, message brokers, log-based queues](#queues-message-brokers-log-based-queues)
  * [database systems](#database-systems)
  * [data formats, serialization / encoding](#data-formats-serialization--encoding)
  * [schedulers ★](#schedulers-)
* [Quality attributes:](#quality-attributes)
  * [functionality (it does what it's supposed to do)](#functionality-it-does-what-its-supposed-to-do)
  * [maintainability / evolvability (it's easy to change without breaking things or rewriting large parts of the code)](#maintainability--evolvability-its-easy-to-change-without-breaking-things-or-rewriting-large-parts-of-the-code)
  * [extensibility](#extensibility)
  * [clarity](#clarity)
  * [explicitness (few hidden asseumptions)](#explicitness-few-hidden-asseumptions)
  * [declarative (specify what problem to solve, not how to solve it)](#declarative-specify-what-problem-to-solve-not-how-to-solve-it)
  * [accessibility (the code requires)](#accessibility-the-code-requires)
* [Algorithms / Data structures / Collections:](#algorithms--data-structures--collections)
  * [arrays, lists, sequential collections](#arrays-lists-sequential-collections)
  * [maps](#maps)
  * [sets](#sets)
  * [hashing](#hashing)
  * [trees](#trees)
  * [DAGs / dependency systems / topological sorts ★](#dags--dependency-systems--topological-sorts-)
  * [regular expressions](#regular-expressions)
  * [grammars ★](#grammars-)
* [Tools & practices:](#tools--practices)
  * [source control](#source-control)
  * [dependency managers & build tools](#dependency-managers--build-tools)
  * [refactoring](#refactoring)
  * [testing](#testing)
  * [debuggers](#debuggers)
  * [benchmarking, profiling](#benchmarking-profiling)
  * [interactive development](#interactive-development)
  * [main IDE features: syntax highlighting, structural navigation, structural editing, refactoring commands, linting, autocompletion, ...](#main-ide-features-syntax-highlighting-structural-navigation-structural-editing-refactoring-commands-linting-autocompletion-)
  * [peer programming ★](#peer-programming-)
  * [code reviews ★](#code-reviews-)
  * [methodologies: Agile, SCRUM, ...](#methodologies-agile-scrum-)
* [Concurrency:](#concurrency)
  * [race conditions](#race-conditions)
  * [low-level primitives: threads, locks, atomic references](#low-level-primitives-threads-locks-atomic-references)
  * [atomicity](#atomicity)
  * [synchronous vs asynchronous](#synchronous-vs-asynchronous)
  * [high-level primitives: queues, Actors, event loops, CSPs](#high-level-primitives-queues-actors-event-loops-csps)
  * [green threading ★](#green-threading-)
* [Performance:](#performance)
  * [latency](#latency)
  * [throughput](#throughput)
  * [resource usage](#resource-usage)
  * [scalability](#scalability)
  * [contention](#contention)
* [Security:](#security)
  * [digest / checksum](#digest--checksum)
  * [encryption](#encryption)
  * [authentication](#authentication)
  * [authorization](#authorization)
* [Paradigms:](#paradigms)
  * [structured programming](#structured-programming)
  * [procedural programming](#procedural-programming)
  * [functional programming](#functional-programming)
  * [object-oriented / class-based / prototypal programming](#object-oriented--class-based--prototypal-programming)
  * [query languages / constraint solvers](#query-languages--constraint-solvers)
  * [relational model](#relational-model)
  * [logic programming ★](#logic-programming-)
  * [production rule systems ★](#production-rule-systems-)
  * ['spreadsheet' (how to name this? 'reactive programming' maybe?) ★](#spreadsheet-how-to-name-this-reactive-programming-maybe-)
  * ['graph' (as embodied by the Plumatic/Graph library: how to name this?) ★](#graph-as-embodied-by-the-plumaticgraph-library-how-to-name-this-)

## General notions:
### syntax vs semantics
### functions / procedures / methods
### polymorphism, interface / implementation
### abstraction
### low-level, high-level
### applications, libraries, application libraries, standard library
### static (resolved by code analysis) vs dynamic (resolved when program executes)
### validation, coercion
### code organization: modules & namespaces
### type systems
### mutation
### variables: names vs references
### types of programs: server, GUI, script, data processing, CLI, REPL lib
### API & clients
**References:**
* [Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)

### producer and consumer
### state

## Architecture:
### the Optimization Metaphor: goals, constraints, and local optima
### design patterns
### separation of concerns / orthogonality / simplicity / complecting
### essential vs incidental complexity
### loose coupling
### code cohesion
### composability
### idempotency ★
### environment coupling ★
### componentization / IoC

## Under the Hood:
### computer internals: processors, CPU, RAM, disks, IO
### the Stack and the Heap
### memory management & garbage collection
### compilation & interpretation
### runtimes / VMs
### machine code, assembly

## Software services:
### storage
### I/O, network protocols
### operating systems
### queues, message brokers, log-based queues
### database systems
### data formats, serialization / encoding
### schedulers ★

## Quality attributes:
### functionality (it does what it's supposed to do)
### maintainability / evolvability (it's easy to change without breaking things or rewriting large parts of the code)
### extensibility
### clarity
### explicitness (few hidden asseumptions)
### declarative (specify what problem to solve, not how to solve it)
### accessibility (the code requires)

## Algorithms / Data structures / Collections:
### arrays, lists, sequential collections
### maps
### sets
### hashing
### trees
### DAGs / dependency systems / topological sorts ★
### regular expressions
### grammars ★

## Tools & practices:
### source control
### dependency managers & build tools
### refactoring
### testing
### debuggers
### benchmarking, profiling
### interactive development
### main IDE features: syntax highlighting, structural navigation, structural editing, refactoring commands, linting, autocompletion, ...
### peer programming ★
### code reviews ★
### methodologies: Agile, SCRUM, ...

## Concurrency:
### race conditions
### low-level primitives: threads, locks, atomic references
### atomicity
### synchronous vs asynchronous
### high-level primitives: queues, Actors, event loops, CSPs
### green threading ★

## Performance:
### latency
### throughput
### resource usage
### scalability
### contention

## Security:
### digest / checksum
### encryption
### authentication
### authorization

## Paradigms:
### structured programming
### procedural programming
### functional programming
### object-oriented / class-based / prototypal programming
### query languages / constraint solvers
### relational model
### logic programming ★
**References:**
* [Wikipedia](https://en.wikipedia.org/wiki/Logic_programming)
* Book: [The Reasoned Schemer](https://mitpress.mit.edu/books/reasoned-schemer)

### production rule systems ★
### 'spreadsheet' (how to name this? 'reactive programming' maybe?) ★
### 'graph' (as embodied by the Plumatic/Graph library: how to name this?) ★
