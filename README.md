lightweight
===========

Overview
--

**Lightweight** is an in-memory key-value store using node.js as a simple REST server.

Why?
--

Because I'm developing my *node.js* applications on a Windows box for the moment, and I needed a key-value store to use with *Express*. Since *redis* isn't supported on Windows, I couldn't use `connect-redis`.

So, I cooked up a simple in-memory key-value store that I could use. It's written using plain *node.js* (no need for *Express*), and it exposes a simple REST API.

The client implementation is in my blog engine, which you can find at http://github.com/rlipscombe/blog/.

Caveats
--

 * It's not fast (but it's fast enough for my needs).
 * It's not secure (make sure it's behind a firewall).
 * It's not persistent (so don't restart it).
