---
title: "Projects"
---

# Projects

### piq <small> [https://github.com/enlezlab/piq](https://github.com/enlezlab/piq) </small>

`piq` is a front-end UI library designed to enhance standard web components. The project's primary goal is to create a future-proof library that does not require a separate compilation process. It focuses solely on the essentials of front-end UI components: templates, styles, and internal logic. Embracing the UNIX Philosophy of doing one thing well and promoting composability, `piq` emphasizes composable web components. The intention is to provide a future-proof solution that simplifies the development of modular and interoperable user interface elements.



### frsh <small> [https://github.com/nanasnumber/frsh](https://github.com/nanasnumber/frsh) </small>

`frsh` is a minimal live reload development server written in Go. The purpose of this project is to leverage Go's concurrency model and create a portable single binary for initiating a straightforward local development server as needed. It employs goroutines to interact with the file system and communicate with the browser via the WebSockets API. It observes file changes, and upon detection, it pings the browser via WebSockets, triggering a live reload.


### gidx <small> [https://github.com/nanasnumber/gidx](https://github.com/nanasnumber/gidx) </small>

`gidx` is a command-line interface (CLI) tool designed to automate processes, such as generating a list of indexed URLs from a specified domain (similar to the manual process of `site:example.com` typically performed within a browser). This functionality allows the user to perform tasks within the command line and create a text file containing the indexed URL results. The tool proves valuable for building redirect files like .htaccess and monitoring indexed URLs for security considerations.


### tcap <small> [https://github.com/nanasnumber/tcap](https://github.com/nanasnumber/tcap) </small>

`tcap` is a command-line interface (CLI) tool written in Go, designed to convert a supplied string argument into title case. Originally created for use within a Bash script, its primary purpose is to format text for markdown and LaTeX in print and book publishing.


### zk <small> [https://github.com/nanasnumber/zk](https://github.com/nanasnumber/zk) </small>

`zk` is my own implementation of zettelkasten note taking cli tool. The `zk` command will open a new markdown file in vim with pre fill title when argument is supplied.


### worklog <small> [https://github.com/nanasnumber/worklog](https://github.com/nanasnumber/worklog) </small>

`worklog` is based on the codebase from `zk`, same note taking concept, but focus on date and time centric logging, it comes in handy when working within command line interface.
