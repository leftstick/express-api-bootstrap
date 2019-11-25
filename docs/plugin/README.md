---
sidebarDepth: 3
---

# Plugin

Plugin system in `express-api-bootstrap` is a way to help developer hack in application startup phase.

Some lifecycles can be used for plugin development.

It's worth mentioning that core features such as: `server`, `cors`, `source watcher`, `api register` are written via Plugin concept.
