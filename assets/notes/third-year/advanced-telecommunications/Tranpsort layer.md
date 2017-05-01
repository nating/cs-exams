# Tranpsort layer

## Transport layer services
The Transport layer services provide logical communication between application processes running on different hosts.

The Transport layer runs on end systems.

The Transport layer breaks messages into segments and reassembles segments into messages.

The Internet uses the Transport Layer Services TCP & UDP.

TCP
 - Reliable
 - In Order delivery
 - Congestion Control
 - Flow Control
 - Connection Setup

UDP
 - Unreliable
 - Unordered delivery
 - No Connection set up

**Multiplexing** refers to handling data from multiple sockets and sending them off.

**Demultiplexing** refers to handling messages and passing each off to the appropriate socket.

A host knows which socket to send a message from the headers values for the:
 - Source Port
 - Destination Port
 - Source IP Address
 - Destination IP Address

Web Servers have a different socket for every client connected.

A thread is a lightweight sub-process.

## UDP (User Datagram Protocol)
UDP segments may be lost or delivered out of order to an application.

UDP is Connectionless. Each UDP segment is handled independant from any other.

UDP is used in DNS, SNMP, & Streaming multimedia applications (which are loss tolerant and rate sensitive)

Why use UDP?
 - No connection establishment (which would add delay)
 - It is simple to implement because there is no connection state at the sender or reciever
 - It has a small header size, which means less data to be transfered.
 - There is no congestion control to slow down data transfer.

## Reliable Data Transfer (RDT)
Applications percieve that they are using a reliable channel.  
The Transport Layer implements this reliable channel while sending the data over an unreliable channel.

To implement RDT we need:
 - Responses to say packets were recieved (**ACKs**)
 - Error checking to make sure packets were recieved correctly (**Checksum**)
 - Responses to say when packets were recieved incorrectly (**NACKs**) or sequence numbers for our ACKs
 - Timers for dropped packets

There are two generic forms of pipelined flow control protocols.

**Go-Back-N**
 - Up to N unacked packets in the pipeline.
 - Reciever can send cumulative acks.
 - Sender has one timer for the oldest unacked packet.
 - Discards out of order packets (No Buffering)
 - The sequence numbers must be go up to higher than the window size.

**Selective Repeat**
 - Up to N unacked packets in the pipeline. 
 - Sender maintains a timer for each unacked packet.
 - Receiver individually acknowledges all correctly recieved packets.
 - Receiver buffers packets as needed, for eventual in-order delivery to upper layer.
 - The sequence numbers must go up to at least twice the window size.

## TCP (Transmission Control Protocol)
TCP is Point-to-Point, it has only one sender and one reciever.

TCP is delivers a reliable, in order byte stream.

TCP has flow control and congestion control.

TCP is Full Duplex. Data can flow in both directions on the same connection.

TCP is connection oriented. It has Handshaking and States at the receiver and sender.

The sequence number in a TCP header is the byte-stream number of the first byte in the segment's data.

The TCP's header includes a piggybacking ACK which indicates the number of the next byte expected from the other side.

To calculate the estimated round trip time for packets on the connection, TCP uses a formula:

```
EstimatedRTT = (1 - a) * EstimatedRTT + a*SampleRTT
```  

*Where SampleRTT is the RTT of the last packet (from send to recieve of ACK) and a is a certain value (typical value for a is 0.125)*

The Timeout interval is the EstimatedRTT plus 4 * (Safety Margin).

The saftey margin is calculated with a formula:

```
SafetyMargin = (1 - (B * SafetyMargin) + (B * |SampleRTT - EstimatedRTT|) )
```

*A typical value for B is 0.25*

TCP has a long time-out period. With **TCP Fast Retransmit**, segments are resent if three ACKs are recieved for it before its timeout (rather than wait for the timeout).

The Receiver uses the *rwnd* (reciever window) value in the TCP header to advertise its free buffer space. The sender limits the amount of unacked packets in flight to only go up to as much as rwnd so that the buffer is guaranteed not to overflow.

When opening a TCP connection, there is a **Three Way Handshake**.

### Three way handshake:  
 - The sender sends a SYN and a sequence number.  
 - The receiver sends his own SYN & sequence number with an ACK back.  
 - The sender ACKs the reciever's syn and the connection is established once the ACK is recieved by the reciever.

To close a TCP connection, the sender sends a FIN bit, which is acknowledged. Then the reciever sends his own FIN bit, and once this is acknowledged, the connection is closed.

A **SYN Flood Attack** (DOS) is when the attacker sends a large number of TCP SYN segments without completing the third part of the handshake process.

To prevent SYN Flood Attacks, servers use **SYN Cookies**. The SYN that the server sends back to the sender has a sequence number that is the **Initial Sequence Number (ISN)**, a hash of the source IP, source Port, Dest IP, Dest Port & Timestamp. A legitimate client will use the information (ISN+1) in the ACK.  

This means that the server does not need to keep information for every SYN it gets. The information is kept via by sending it in the SYNACK back to the sender.

### Congestion Control

Too much congestion results in lost packets and long delays. A lack of congestion control also means buffer overflows at routers.

Congestion can result in the retransmission of packets that were not lost, corrupted or dropped- causing more congestion!

##### There are two approaches towards congestion control:  
 - **End-to-End** Congestion Control, where the congestion is inferred from the observed loss at the end systems.
 - **Network Assisted** Congestion Control, where routers provide feedback to the systems with an explicit rate for the senders to send at.

##### ATM (Asynchronous Transfer Mode) ABR (Available Bit Rate) Congestion Control
ATM ABR is an 'Elastic Service' if the sender's path is congested, he throttles to the minimum guaranteed rate.

In ATM ABR, packets called **Resource Management** cells are sent intersperced with the data packets. The bits in the RM cells are set by switches along the way to indicate if there is congestion.

TCP uses an **Additive Increase Multiplicative Decrease** form of congestion control.

Using AIMD, the sender increases the transmission rate (window size) until a loss occurs and it cuts the bandwidth in half.

**TCP Slow Start** refers to how the rate is increased exponentially from the beginning of the connection until the first loss. After the first loss, the rate is halfed and it grows linearly.

With slow start, there is a threshold at which you change from increasing the rate exponentially to increasing it linearly. This threshold is variable.

With **TCP Reno** you half the rate and increase it linearly after every loss.

With **TCP Tahoe** you half the rate and increase it exponentially after every loss.

**SSL (Secure Sockets Layer)** Provides an encrypted TCP connection.

SSL is at the Application Layer. Apps use SSL libraries which talk to TCP.