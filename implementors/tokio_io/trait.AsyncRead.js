(function() {var implementors = {};
implementors["tokio_core"] = ["impl <a class='trait' href='tokio_io/trait.AsyncRead.html' title='tokio_io::AsyncRead'>AsyncRead</a> for <a class='struct' href='tokio_core/net/struct.TcpStream.html' title='tokio_core::net::TcpStream'>TcpStream</a>","impl&lt;'a&gt; <a class='trait' href='tokio_io/trait.AsyncRead.html' title='tokio_io::AsyncRead'>AsyncRead</a> for &amp;'a <a class='struct' href='tokio_core/net/struct.TcpStream.html' title='tokio_core::net::TcpStream'>TcpStream</a>","impl&lt;E:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='tokio_io/trait.AsyncRead.html' title='tokio_io::AsyncRead'>AsyncRead</a> for <a class='struct' href='tokio_core/reactor/struct.PollEvented.html' title='tokio_core::reactor::PollEvented'>PollEvented</a>&lt;E&gt;","impl&lt;'a, E&gt; <a class='trait' href='tokio_io/trait.AsyncRead.html' title='tokio_io::AsyncRead'>AsyncRead</a> for &amp;'a <a class='struct' href='tokio_core/reactor/struct.PollEvented.html' title='tokio_core::reactor::PollEvented'>PollEvented</a>&lt;E&gt; <span class='where fmt-newline'>where &amp;'a E: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a></span>",];
implementors["tokio_io"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
