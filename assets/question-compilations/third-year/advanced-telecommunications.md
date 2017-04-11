# Advanced Telecommunications
---

# 1. TCP vs UDP

1. Distinguish between UDP & TCP in terms of reliable data transfer, header size & connection overheads. **[5 marks]**

2. Explain the difference between TCP & UDP under the headings: Connection, Function, Usage, Reliability, Packet Ordering, Speed of transfer, Data Flow control, Error Checking, Handshake & Examples (e.g. HTTP = TCP). **[20 marks]**

3. Describe the functionality provided by UDP & TCP. **[5 marks]**  
Which one would you use for multimedia communications and why? **[5 marks]**

4. Would TCP or UDP be preferable for IP Telephony & IP Video Conferencing? Justify your answer. **[5 marks]**

5. A Web server using persistant connections is running on host C on port 80. It is recieving requests from both host A and B.  
Are all the requests being sent through the same socket on host C?  
If they are being passed through different sockets, do both the sockets have port 80? Discuss & Explain. **[6 marks]**

6. Draw the FSM for the reciever that corresponds to this sender's fsm.
![](/Users/GeoffreyNatin/Documents/Screenshots/Screen Shot 2017-04-09 at 17.03.33.png)

7. If host A sends two packets to host B, the first with sequence number 65 and the second with sequence number 92, how much data is in the first segment? **[3 marks]**

8. If the first segment is lost and the second segment arrives, what will the ACK from B's acknowledgement number be? **[3 marks]**

9. With the aid of an example, describe the TCP 'Fast Retransmit' algorithm and its advantages. **[8 marks]**

10. Why is TCP congestion control referred to as an additive-increase, multiplicative-decrease (AIMD) form of congestion control? **[8 marks]**

# 2. HTTP

1. Briefly explain the role of Hypertext Transfer Protocol (HTTP) in web communications. **[5 marks]**  
Why is HTTP 1.0 called a stateless protocol? **[5 marks]**

2. Describe how an e-comerce site can keep a purchase record of each of its customers using cookies. **[10 marks]**

3. Consider the institutional network below, which is connected to the internet via a 15 Mbps access link. Suppose that the average object size is 960,000 bits and that the average request rate from the institution's browsers to the origin servers is 15 requests per second. Also suppose that the amount of time it takes from when the router on the Internet side of hte accss link forwards an HTTP request until it recieves the response is 2 seconds on average. Model the total average response time as teh sum of the average access delay (that is, the delay from the internet router to the institution router) and the average Internet delay. For the average access delay, use Δ(1-Δβ), where Δ is the average time required to send an object over the access link and β is the arrival rate of objects to the access link.  
Find the average response time. **[6 marks]**
![](/Users/GeoffreyNatin/Documents/Screenshots/Screen Shot 2017-04-10 at 11.00.02.png)
4. Find the total response time if a cache is installed in the institutional LAN with a miss rate of 0.4. **[6 marks]**

5. Consider what happens when a browser (i.e. a HTTP client), running in some user's host, requests the URL somesite.com/index.html. In order for the user's host to be able to send a HTTP request message to the Web server www.somesite.com. Explain the steps through which the IP address for such a hostname is obtained by the client. **[12 marks]**

6. What is a DNS? **[1 mark]**  
What protocol do DNS use? **[2 marks]**  
What would the implications be if all the DNS servers worldwide went offline at the same time? **[2 marks]**

7. Describe in detail the operation and benefits provided by a Content Distribution Network (CDN). **[10 marks]**

8. What is the role of DNS in a Content Distribution Network (CDN)? **[4 marks]**  
Does the DNS have to be modified to support the CDN? **[3 marks]**  
What information, if any, must a CDN provide to a DNS? **[3 marks]**

9. What is the role of a SIP registrar? **[5 marks]**  
How is the role of a SIP registrar different from that of a home agent in Mobile IP? **[5 marks]**

10. How can a multimedia application recover from packet loss without the need for retransmission? **[3 marks]**  
Describe in detail three methods discussed in lectures. **[12 marks]**

11. In BitTorrent, suppose Alice provides chunks to Bob throughout a 30-second interval. Will Bob necessarily return the favor and provide chunks to Alice in the same interval? **[3 marks]**

12. Consider Trudy joins the BitTorrent without possessing any chunks. Without any chunks, she cannot become a top-four uploader for any other peers, since she has nothing to upload. Then how will Trudy get her first chunk? **[6 marks]**


# 3. Cryptography

1. Describe some of the components that comprise modern day block ciphers. In particular, describe with the aid of an example the Vignère Cipher. **[8 marks]**

2. With the aid of an example, show why the electronic code book (ECB) mode is susceptible to substitution attacks. Describe the cipher block chaining (CBC) mode and hot it can provide probablistic encryption which overcomes the deterministic features of ECB mode. **[10 marks]**

3. Define a cyclic group G. **[2 marks]**  
What is the primitive element or generator of the group G? **[2 marks]**  
Check if a=2 is a primitive element of ℤ*<sub>11</sub>. **[2 marks]**  
Is the group ℤ*<sub>11</sub> a cyclic group? **[2 marks]**

4. Compute the two public keys and the common key for the Diffie-Hellman key exchange (DHKE) scheme with parameters p=467, α=2, and a =228, b=57. **[6 marks]**  
Show with the aid of an example how the DHKE scheme is vulnerable to man-in-the-middle (MITM) attacks. **[6 marks]**

5. The Diffie-Hellman key exchange is being used to establicsh a secret key between Alice and Bob. Alice sends Bob (227, 5, 82). Bob responds with (125). Alice's secret number, x, is 12, and Bob's secret number, y, is 3. Show how Alice and Bob ompute the secret key. **[15 marks]**

6. If Alice and Bob have never met, share no secrets, and have not certificates they can nevertheless establish a shared secret key using the Diffie-Hellman algorithm. Explain why it is very hard to defend agains the man in the middle attack. **[15 marks]**

7. Alice used a transposition cipher to encrypt her messsages to Bob. For added security, she encrypted the transposition cipher key using a substitution cipher key. Can Trudy decipher Alice's messages to Bob? Why or Why not? **[15 marks]**

8. Alice wants to communicate with Bob using public-key cryptography. She establishes a connection to someone she hopes is Bob. She asks him for his public key and he sends it to her in plaintext along with an X.509 certificate signed by the root CA. Alice already has the public key of the root CA. What septs does Alice carry out to verify that she is talking to Bob? **[15 marks]** 

9. Suppose that a system uses PKI based on a tree-structured hierarchy of CAs. Alice wants to communicate with Bob, and recieves a certificate from Bob sigend by a CA X after establishing a commuincations channel with Bob. Suppose Alice has neer heard of X. What steps does Alice take to verify that she is talking to Bob? **[10 marks]**

10. Change one message in the exhange below in a minor way to make it resistant to the reflection attack. Explain why this change works. **[5 marks]**![](/Users/GeoffreyNatin/Documents/Screenshots/Screen Shot 2017-04-10 at 16.40.01.png)

11. Describe in detail the Handshake in the secure sockets layer (SSL) protocol. **[4 marks]**  
When we talk about authentication in SSL, explain if we mean *message authentication* or *entity authentication*. **[4 marks]**  
What is the purpose of the random nonces in the SSL handshake? **[4 marks]**
 

12. In what way does a hash provide a better message integrity check than a checksum (e.g. a CRC)? **[4 marks]**  
Explain whether you can 'decrpyt' a hash of a message to get the original message. **[4 marks]**

13. Show with the aid of an example how Alice and Bob can exchange a 'Signed and Enveloped Message' using digital signatures. **[12 marks]**

14. Compare and contrast Macropayment and Micropayment systems giving examples of each. **[6 marks]**

15. Explain what you understand by the phrase 'Proof-of-Work' in the context of the Bitcoin electronic cash scheme. **[6 marks]**

16. Differentiate between Symmetric and Asymmetric key cryptosystems giving advantages and disadvantages of each approach. Show how symmetric ciphers can be used in conjunction with asymmetric ciphers for secure session key exchange and fast bulk encryption. **[15 marks]**

17. Encrypt the message "THIS IS AN EXERCISE" using a shift cipher with a key of 20. Explain with an aid of an example why such ciphers can be easily broken. **[10 marks]**

18. Using RSA, choose p=3 and q-11, and encode the word 'hello'. Apply the decryption algorithm to the encrypted version to recover the original plaintext message. **[15 marks]**

19. Consider RSA with p=7 and q=13:  
i. What are n and ϕ(n)? **[3 marks]**  
ii. Let e be 5. Why is this an acceptable choice for e? **[3 marks]**  
iii. Find d such that e*d ≣ 1(modϕ(n)). **[3 marks]**  
iv. Encrypt the message m=9 using the key (e,n). **[3 marks]** 

20. To show that you understand the security of hte RSA algorithm, find d if you know that e=17 and n=187. **[15 marks]**

21. Trudy's RSA keys are as follows: n<sub>t</sub>=33,d<sub>t</sub>=3, e<sub>t</sub>=7. Trudy finds out that Bob's public key is n<sub>b</sub>=33, e<sub>b</sub>=3. How can Trudy use this information to read encrypted messages from Bob? Explain with the aid of a worked example. **[15 marks]**

22. Summarize the key differences in the services provided by the Authentication Header (AH) protocol and the Encapsulation Security Payload (ESP) protocol in IPsec. **[10 marks]**

23. What are the differences between message confidentiality and message integriy?  **[4 marks]**  
Can you have one without the other? **[2 marks]**  
Show how message integrity can be achieved using symmetric an asymmetric key cryptographic techniques. **[6 marks]**  

24. In the Needhan-Schroder authentication protocol, Alice generates two challenges R<sub>A</sub> & R<sub>A2</sub>. This seems like overkill. Would one not have done the job? Justify your answer by showing the protocol exchanges between Alice, the Key Distribution Centre (KDC) and Bob. **[15 marks]**

25. Summarize the key differences in the services provided by the Authentication Header (AH) protocol and the Encapsulation Securtiy Payload (ESP) protocol in IPsec. **[8 marks]**

26. Explain with the aid of an example how Alice and Bob can mutually authenticate each other using a hashed message authentication protocol (HMAC). Give one advantage of HMACs over using RSA to sign SHA-1 hashes. **[10 marks]**



# 4. IP

1. Briefly describe the various datalink and network layer protocols used in transporting IP datagrams from the source to destination machines in the figure below. **[12 marks]**![](/Users/GeoffreyNatin/Documents/Screenshots/Screen Shot 2017-04-10 at 11.31.12.png)

2. Explain the meaning of the term 'IP address class' and why these classes were created. List the number of networks, hosts and the default mask in each of the first three classes. Explain in detail how 'classless' addressing overcomes some of the restrictions of classful addressing. **[10 marks]**

3. Distinguish between Classful and Classless addressing in IP networks highlighting the advantages and disadvantages of each approach. **[8 marks]**

4. Describe the 'slash notation' used in Classless Inter Domain Routing (CIDR). If one address in a block is 202.44.82.16 and the subnet mask is 255.255.255.192, find the network prefix, first address and the last address. **[10 marks]**

5. If one address in a block is 167.199.170.82/27, find the number of adresses in the network, the first address and the last address. **[5 marks]**

6. An organization is granted the block 130.56.0.0/16. The administrator wants to create 1024 subnets. Find:
i. The number of addresses in each subnet. **[3 marks]**
ii. The subnet prefix. **[3 marks]**
iii. The first and last address of the first subnet. **[3 marks]**
iv. The first and last address of the last subnet. **[3 marks]**

7. An organization is granted the block 211.17.180.0/24. The administrator wants to create 32 subnets. Find:
i. The number of addresses in each subnet. **[5 marks]**
ii. The subnet mask. **[5 marks]**
iii. The first and last address of the first subnet. **[5 marks]**
iv. The first and last address of the last subnet. **[5 marks]**

8. Is it possible for an organization's Web server and mail server to have exactly the same alias for a hostname (e.g. foo.com)? What would be the type of RR that contains the hostname for the mail server? **[8 marks]**

9. Describe with the aid of an example the concept of Multiprotocol Label Switching (MPLS). **[6 marks]**  
What the specific support is there for MPLS in IPv6? **[4 marks]**

10. Compare and contrast the IPv4 and IPv6 header fields. **[7 marks]**  
Why is the *Protocol* field used in the IPv4 header not present in the fixed IPv6 header? **[3 marks]**

11. Specify the routing table for the router R3 in the figure below. **[15 marks]**![](/Users/GeoffreyNatin/Documents/Screenshots/Screen Shot 2017-04-10 at 16.57.32.png)

12. The routing table for a router R1 is provided in the table below. You are required to draw the topology of the resulting network. Explain any assumptions that you may have had to make. **[15 marks]**![](/Users/GeoffreyNatin/Documents/Screenshots/Screen Shot 2017-04-10 at 17.17.31.png)

13. List the entities of Mobile IP and describe the process of data transfer from a mobile node to a fixed node and vice versa. **[10 marks]**  
Why and where is encapsulation needed? **[5 marks]**

14. Name the inefficiencies of Mobile IP regarding data forwarding from a correspondent node to a mobile node. **[5 marks]**  
What are the optimizations and what additional problems do they cause? **[10 marks]**

15. What are the general problems of Mobile IP regarding security? **[5 marks]**

16. Why is routing in multi-hop ad-hoc networks complicated, and what are the special challenges? **[5 marks]**  
How does the Dynamic Source Routing (DSR) protocol handle routing? **[5 marks]**  
What is the motivation behind DSR compared to other routing algorithms from fixed networks? **[5 marks]**

# 5. Medium Access Control

1. Describe the various Medium Access Control (MAC) schemes employed in cellular networks, highlighting their advantages and disadvantages. **[12 marks]**

2. In a typical mobile phoen system with hexagonal cells, it is forbidden to reuse a frequency band in an adjacent cell. If 840 frequencies are available, how many can be used in a given cell? **[4 marks]**

3. Describe in detail the steps involved during a GSM 'Mobile Terminated Call', e.g. when a node in the PSTN makes a call to roaming mobile node. **[12 marks]**

4. Explain why there is a need for a 'handover' to take place in mobile networks. **[5 marks]**  
Identifying the network entities involved in each case, what are the various types of handover that can occur in GSM networks?**[5 marks]**

5. With the aid of an example, outline the inefficiencies of Mobile IP regarding data forwarding from a correspondent node to a mobile node. **[6 marks]**  
What are the optimizations and what additional problems do they cause? **[6 marks]**

6. Describe in detail the four fundamental channel-access schemes used in a telecommunications system hightlighting their strengths and weaknesses. Give an example of an application of each scheme (or a combination of them). **[16 marks]**

7. With the aid of a diagram, describe the main entities that comprise a 2G (GSM) and 3G (UMTS) mobile network architecture. List the purpose and functions of each component and the interactions between them. **[15 marks]**

8. Explain what is meant by the 'Hidden Terminal' & 'Exposed Terminal' problems, giving an example of each. **[8 marks]**  
Describe in detail a multiple access method used in 802.11 networks to avoid collisions. **[7 marks]**

9. Explain why when a mobile user crosses the boundary from one cell to another, the current call is abruptly terminated, even though all transmitters and recievers are functioning perfectly. **[4 marks]**

10. Outline the key distinguishing features of a Local Area Network (LAN). Describe the various 'pure' and 'hybrid' topologies in use today giving advantages and disadvantages of each. **[15 marks]**

11. Briefly explain the operation of Ethernet (802.3), Fast Ethernet (802.3u) and Gigabit Ethernet (802.3z) with particular emphasis on the slot-time, minimum frame size, netowork length and their interdependancies. **[20 marks]** 

12. Explain why there is no need for CSMA/CD in a full-duplex Ethernet LAN? **[5 marks]**

13. What are the advantages of dividing a LAN with switches? **[5 marks]**  
Show how a switch is able to make use of MAC layer addressing to quickly switch packets from one collision domain to another. **[5 marks]**