# Application Layer

---

## Network Application Architectures
Network Applications can be structured Client-to-Server or Peer-to-Peer.

#### Client Server
 - Server is always on.
 - Clients may be intermittently connected.
 - Clients may have dynamic IP addresses.
 - Scaled by adding servers / data centers.

#### Peer to Peer
 - There is no 'always on' server.
 - Peers request service from other peers and provide a service in return.
 - Peers are intermittently connected and change IP addresses (complex management).
 - Self-scaled when new peers are added.

##### What Transport Services might an Application need?
 - Reliable data transfer (no data loss).
 - A Minimum Throughput.
 - A low delay (Internet telephony / multiplayer games).
 - Security.

## WWW & HTTP
A web page consists of a basic HTML page which includes several references objects.

HTTP uses TCP.

HTTP is Stateless.

With **Non-Persistent HTTP** at most one object can be sent over a TCP connection and then it is closed.

With **Persistent HTTP** multiple objects can be sent over the one TCP connection.

The default mode of HTTP is Persistant.

Non-persistant HTTP requries at least two RTTs per object and has an OS overhead for each TCP connection.

In persistant HTTP servers can leave the connection open after sending a response. All requests are sent over the same connection and the client makes a request as soon it encounters a referenced object.

There are two types of HTTP message: **Request** & **Response**.

HTTP Methods include GET, POST, HEAD, PUT, DELETE & URL.

Status codes such as 200 (OK), 301 (Moved Permanently), 400 (Bad Request) & 404 (Not Found) appear in the first line in server to client resonses.

HTTP has been designed as a stateless protocol but **Cookies** can be used to keep states.

**Web Caches (Proxy Servers)** can satisfy clients' requests without involving the origin server, reducing the response time for client requests.

Web caches act as both a client and a server.

Web caches are typically installed by an ISP, University or Company.

Conditional GET requests specify a date. If the cached version has not been modified since the date, no object is returned.

## Simple Mail Transfer System
The three components of electronic mail are user agents, mail servers and the Simple Mail Transfer Protocol (SMTP).

A user agent is how a user interacts with email. 

Incoming and Outgoing messages are stored on a server.

A **Mail Server** stores a user's incoming messages in a mailbox and their outgoing messages in a queue.

SMTP uses port 25. Messages are sent directly fro mthe sending server to the recieving server. 

##### There are three phases of SMTP transfer
 - Handshaking
 - Transfer of messages
 - Closure

SMTP uses a command-response interaction like HTTP & FTP.

Mail messages have a format:

|Part|Contents
|---|---
|Header|To, From, Subject
||
|Body|The message (ASCII characters only)

**Multipurpose Internet Mail Extension (MIME)** is a supplementary protocol that allows non-ASCII data to be sent via SMTP. It converts non-ASCII to ASCII & vice versa.

|Mail Access Protocols||
|---|---
|Simple Mail Transfer Protocol (SMTP)|Delivery & Storage on reciever's server
|Mail Access Protocol (MAP)|Retrieval from server
|Post Office Protocol (POP)|Authorization & Download
|Internet Mail Access Protocol (IMAP)|More features, including manipulation of stored messages on server
|HTTP|Fmail, Hotmail, Yahoo! mail etc.

With POP3, messages are downloaded by the user agent and deleted from the server. POP3 is stateless across sessions.

With IMAP, messages on the server are simply viewed from the user agent. IMAP keeps user states across sessions.

## Domain Name System (DNS)
A Domain name system is a distributed database implemented in a hierarchy of many name servers.

DNS works at the application layer.

##### DNS provides different services
 - Host Aliasing
 - Canonical, alias names
 - Mail server aliasing
 - Load Distribution
 - Replicated Web Servers

Domain name servers are used to help resolve domains to IP addresses.

Each ISP has a **Local DNS** which caches recent name-to-address translation pairs.

**Root Name Servers** are contacted to find out the name servers for Top Level Domains (.com, .ie, .org). But TLDs are usually cached by local DNS.

A DNS is a distributed database storing **Resource Records (RR)**.

Each RR has a Name, Class, Type, TTL, & Value.

|Resource Record Types||
|---|---
|A|IPv4 address
|AAAA|IPv6 address
|NS|Name Server record
|CNAME|Canonical Name (alias) record
|MX|Mail Exchange Record

DNS can be attacked by DDOS (not very successfully), Redirect attacks (man in the middle interception of queries), and DNS Poisoning (sending bogus replies to DNS which get cached).

## P2P Applications
In a peer to peer architecture, arbitrary end systems communicate directly.

When a server is distributing files to clients, the distribution is capped by the upload capacity of the link from the server.

Peer to Peer file distribution makes use of the upload capacity of each peer who has chunks of the file.

With **BitTorrent**, files are divided into 256KB chunks which are sent and recieved

With BitTorrent a user arrives, obtains the list of peers from a tracker and begins file sharing.

Periodically, users ask their peers for a list of their chunks.  
They always ask for the chunks that they don't have, starting with the rarest.  

A user always sends chunks to the four peers currently sending her chunks at the highest rate.  
The top four are re-evaluated every ten seconds.  
Every thirty seconds a peer is randomly selected to have chunks sent to as well optimistically.

## Web Applications
**Rich Internet Applications (RIAs)** are web apps that look and feel like desktop applications.

The two key attributes of RIAs are performance (which is achieved through Ajax) and a rich GUI.

A **Web Application** is a dynamic website that mimics the feel of a desktop app.

**Asynchronous** means that a user can keep interacting with a page while the data loads.

**Ajax** is Asynchronous XML And Javascript. It is not a programming language, but a particular way of using javascript.

Ajax downloads data from the server in the background, allowing the page to be dynamically updating the page without the user refreshing.

##### Typical flow of an Ajax request is:
 - User clicks, throwing event handler
 - Handler makes XMLHttpRequest to server
 - Server finds and sends back data
 - Response XHR object triggers a callback function
 - Callback function displays the data

For security reasons, XHR objects cannot request resources from domains other than the one serving the application.

Ajax always has to poll data from the server rather than recieve it via push from the server. Creating new HTTP connections everytime would create a bottleneck.

**Websockets** enable your client-side javascript to open a persistant connection to a server.

Websockets also have full duplex capability so that client side javascript can recieve data via push from the server.

To open up a websocket, the client sends a normal HTTP message with an upgrade header to the server, and they perform a Websocket Handshake.

With Websockets, data is transferred as *messages* rather than HTTP requests, which reduces the amount of non-payload data which is transferred.
