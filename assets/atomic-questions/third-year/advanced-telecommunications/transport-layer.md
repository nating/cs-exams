# Advanced Telecommunication Questions I ask myself

## Transport Layer

### Transport Layer Services

**What services does the Transport Layer provide?**

*The Transport Layer provides end to end communication between application processes running on different hosts.*

**What data does the Transport Layer deal with?**

*On the sending side, the Transport Layer takes messages from the application layer and divides them up into segments before passing them onto the Network Layer  
On the recieving side, the Transport Layer takes these segments and pieces them back together into messages before passing them to the application layer.*

**How can a host deterine what socket an IP datagram is meant for?**

*The destination socket can be determined from the Source IP address and Port, as well as the Destination IP address and Port. These are all included in the header of packets in the Transport Layer.*

**What does TCP stand for?**

*TCP stands for 'Transmission Control Protocol'.*

**What does UDP stand for?**

*UDP stands for 'User Datagram Protocol'.*

**What Transport Layer services does the Internet use?**

*The Internet makes use of the 'Transmission Control Protocol' (TCP) and the 'User Datagram Protocol' (UDP).*

**What is good about TCP?**

*TCP provides flow control and congestion control. It is connection oriented, reliable & delivers packets in order. Its connections are full duplex allowing data to flow in both directions.*

**Good about UDP?**

*UDP is connectionless, so there is no delay from the overhead of setting up a connection. It is simple to implement because there is no connection state at the sender or reciever. The headers in UDP are smaller than the headers in TCP so there is less data to be transmitted. There is no congestion control in UDP to slow down data transfer. UDP is good for loss tolerant & rate sensitive applications.*

**What is bad about TCP?**

*TCP has the overhead of making a connection which adds a delay. It has larger header sizes to deal with flow control so more data has to be sent. It is more complex to implement than UDP because there are connection states at the sender and reciever. Congestion control means that the data you are sending is throttled so data transfer can be slowed.*

**What is bad about UDP?**

*UDP is unreliable. It has no way of telling whether a packet sent arrived at the sender. It has no congestion control so it can flood the system packets unnecessarily. Packets may be delivered out of order.*

**What sort of applications use UDP?**

*UDP is used for DNS, SNMP and Streaming Multimedia Applications.*

**What does RDT stand for and what is it?**

### Flow Control

*RDT stands for 'Reliable Data Transfer'. It refers to methods of transferring data where the data is guaranteed to be delivered to the reciever.*

**What process allows the Transport Layer to provide the reliable transfer of data?**

*Flow Control.*

**What elements are necessary for reliable data transfer?**

*To implement reliable data transfer we need response messages to say that packets were delivered, a way to tell whether packets were recieved correctly, a way to say that an incorrect packet has been recieved, and timers for lost packets.*

**Name two types of pipelined flow control mechanisms.**

*Go-Back-N & Selective Repeat.*

**What is 'Go-Back-N'?**

*Go-Back-N is a flow control mechanism, where multiple packets can be sent at once. The sender and reciever have a 'window' of size N that contains the packets currently to be sent in the pipeline. Packets are numbered by their place in the window so that the end systems can track which are expected, or need to be sent again. The reciever sends cumulative acknowledgments that serve as an acknowledgement for all previous packets in the window. Packets that arrive out of order are dropped. The packet numbers need to go up to at least one more than the window size to any confusion that might arise due to ACKs that don't make it back to the sender. The sender keeps a timer for the oldest unacknowledged packet.*

**What is 'Selective Repeat'?**

*Selective Repeat is a flow control mechanism, where multiple packets can be sent at once. The sender and reciever have a 'window' of size N that contains the packets currently to be sent in the pipeline. Packets are numbered by their place in the window so that the end systems can track which are expected, or need to be sent again. The reciever sends an acknowledgment for every packet it recieves correctly. Packets that arrive out of order are buffered (They are not passed on to the application layer until the packets them arrive). The packet numbers need to go up to at least twice the window size to any confusion that might arise due to ACKs that don't make it back to the sender. A timer is kept for every packet at the sender in case packets are lost.*

**Does TCP send acknowledgement packets separately from data packets?**

*No, TCP sends piggybacking acknowledgments included in the header of the data packets indicating what packet is expected next.*

**What does RTT stand for?**

*RTT stands for 'Round Trip Time'.*

**What is TCP Fast Retransmit?**

*TCP has a long timeout period. If three duplicate acknowledgements for a packet are recieved at the sender (i.e. four acknowledgments), the packet is resent and its timer is restarted.*

**What is meant by 'rwnd'?**

*'rwnd' is used as a shorthand for 'Reciever Window'. The reciever advertises his free buffer space by including it in TCP headers of reciever to sender segments. The sender uses this information to limit the amount of in-flight packets to the recievers 'rwnd' value.*

### Connection Control

**How is a TCP connection set up?**

*The sender sends a SYN message with a sequence number indicating that he would like to 'Synchronize'. The reciever acknowledges the SYN message and sends his own SYN message in response, with an acknowledgement for the next packet from the sender. When this SYN ACK arrives at the sender, he sends an acknowledgment of it, and when the acknowledgement arrives at the reciever the connection has been established. This is known as a 'Three Way Handshake'.*

**How is a TCP connection closed?**

*To close a TCP connection, the sender sends a FIN bit, which is acknowledged. Then the reciever sends his own FIN bit, and once this is acknowledged, the connection is closed.*

**What is a SYN Flood Attack?**

*A SYN Flood Attack is an attack where many Three Way Handshakes are initiated with one reciever but the third step is never performed.*

**How are SYN Flood Attacks prevented?**

*When someone initiates the first part of the Three Way Handshake, servers hash all of the information about that connection (src/dest IP, src/dest Port) with a timestamp into their SYN response as the sequence number. Resources can be allocated for that connection if an response comes back with the proper acknowledgement.*

### Congestion Control

What are the two approaches of congestion control?

*'Network Assisted’ congestion control, where routers give feedback to the end systems with an explicit rate for them to send at, and ‘End-to-End’ congestion control where congestion is inferred from the observed loss at end systems.*

**What is ‘Network Assisted’ congestion control?**

*Routers provide a feedback with an explicit rate for end systems to send at.*

**How does ‘End-to-End’ congestion control work?**

*Congestion is inferred from the observed loss at the end systems.*

**What does ATM ABR stand for, and what is it?**

*ATM ABR stands for 'Asynchronous Transfer Mode Available Bit Rate'.  
ATM ABR is a type of congestion control where the sender throttles his sending rate to the minimum guaranteed rate if his path is congested. 'Resource Management Cells' are sent intersperced in the data. These cells have their bits set by switches along the way to indicate if there is congestion.*

**What does AIMD stand for, and what is it?**

*AIMD stands for Additive Increase Multiplicative Decrease. It is a form of congestion control where the sending rate of data is increased until a loss occurs, at which point the bandwidth is cut in half.*

**What form of congestion control does TCP use?**

*TCP uses an Additive Increase Multiplicative Decrease (AIMD) form of congestion control. It increases the rate at which it sends data until a loss occurs, at which point it cuts the bandwidth in half.*

**What is 'TCP Slow Start'?**

*TCP slow start is a congestion control algorithm where data sent increases initially at an exponential rate until a loss occurs. After a loss occurs, the rate is cut in half and from then on it increases linearly.  
When implementing slow start, there is a cut-off point at which the rate stops growing exponentially and starts to grow linearly. This cut-off point can vary over time during the connection.*

**What is the difference between 'TCP Reno' & 'TCP Tahoe'?**

*The TCP Reno algorithm involves cutting the rate in half and increasing it linearly when a loss occurs. Whereas TCP Tahoe involves cutting the rate in half and then increasing it exponentially when a loss occurs.*

### SSL

**What is 'SSL'?**

*SSL stands for 'Secure Sockets Layer'. It provides encryption to TCP connections.*

**What layer is 'SSL' a part of?**

*SSL is part of the Transport Layer.*
