
# CS7IS3 - Setting up a Maven x Lucene project on AWS (in progress)

  I hope this saves you some time. Something like this certainly would have saved me time.

There is a list of sources at the bottom of this file if you want to see where I’m getting my information from x.

## Walkthrough

 ### Install Maven

Download the maven binary from [this page](http://maven.apache.org/download.cgi). (Or just click [here](http://mirrors.whoishostingthis.com/apache/maven/maven-3/3.5.4/binaries/apache-maven-3.5.4-bin.zip) to download it x)

Change to the directory that you have maven in and unzip it. e.g:
`unzip apache-maven-3.5.4-bin.zip`

 Add the bin directory of the created directory apache-maven-3.5.4 to the PATH environment variable. (Copy the file path of the bin folder in the unzipped folder, and add it to your bashrc/whateverrc by adding a line like ‘export PATH=/<intermediate directories>/apache-maven-3.5.4/bin’) 

Open up a new shell and type `mvn -v` to make sure that Maven is now installed. If not, you’ve fallen off the walkthrough and best of luck with getting back on track 😅  

### Create a Maven project

*In the following step, don’t use hyphens in your app name if you don’t want trouble x* 

 Go to whatever place you want to create your project and run a command like this to create a maven app:   
`mvn archetype:generate -DgroupId=com.<your company name (could just be your name, or ‘mycompany’)>.<your app name> -DartifactId=<your app name> -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false`

You can learn a bit about the file structure you have just created [here](http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html), if you are interested…

 ### Build your maven project 

Run this command from inside the app folder:
`java -cp target/<your app name>-1.0-SNAPSHOT.jar com.<your company name>.<your app name>.App`

### Add Lucene to your project

Add Lucene to the project’s pom.xml:  ```
<project>
  …
  <properties>
  	<lucene.version>7.5.0</lucene.version>
  </properties>
  …
  <dependancies>
  	<dependency>
        		<groupId>org.apache.lucene</groupId>
        		<artifactId>lucene-core</artifactId>
        		<version>${lucene.version}</version>
      	</dependency>
      	<dependency>
        		<groupId>org.apache.lucene</groupId>
        		<artifactId>lucene-analyzers-common</artifactId>
        		<version>${lucene.version}</version>
      	</dependency>
      	<dependency>
        		<groupId>org.apache.lucene</groupId>
        		<artifactId>lucene-queryparser</artifactId>
        		<version>${lucene.version}</version>
      	</dependency>
  </dependancies>
  …
</project>
```

### Write some Lucene code

...

### Get your project running on AWS

...

 ## Sources

I used instructions from the following places:

Maven: 
* http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html
 * http://maven.apache.org/download.cgi
 * http://maven.apache.org/install.html

Lucene:
* https://howtodoinjava.com/lucene/lucene-index-search-examples/
* https://www.mkyong.com/maven/how-to-create-user-defined-properties-in-maven/
