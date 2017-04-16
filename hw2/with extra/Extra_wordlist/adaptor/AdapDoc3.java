AbstractWrapper

public abstract class AbstractWrapper
extends java.lang.Object

void	add(Chunk event)
Add a chunk to the queue, potentially blocking.
void	committed(long commitedByte) 
String	getCurrentStatus()
Return the adaptor's state Should not include class name or byte offset, which are written by caller.
String	getType() 
String	parseArgs(String innerClassName, String params, AdaptorManager a)
Note that the name of the inner class will get parsed out as a type
long	shutdown(AdaptorShutdownPolicy shutdownPolicy)
Signals this adaptor to come to an orderly stop.
void	start(String adaptorID, String type, long offset, ChunkReceiver dest)
Note that the name of the inner class will get parsed out as a type
public AbstractWrapper()

public String getCurrentStatus()
Description copied from interface: Adaptor
Return the adaptor's state Should not include class name or byte offset, which are written by caller. The datatype should, however, be written by this method.
Specified by:
getCurrentStatus in interface Adaptor
Returns:
the adaptor state as a string

public String parseArgs(String innerClassName,
               String params,
               AdaptorManager a)
Note that the name of the inner class will get parsed out as a type
Specified by:
parseArgs in interface Adaptor
public long shutdown(AdaptorShutdownPolicy shutdownPolicy)
              throws AdaptorException
Description copied from interface: Adaptor
Signals this adaptor to come to an orderly stop. The adaptor ought to push out all the data it can before exiting depending of the shutdown policy
Specified by:
shutdown in interface Adaptor
Returns:
the logical offset at which the adaptor was when the method return
Throws:
AdaptorException
public void start(String adaptorID,
         String type,
         long offset,
         ChunkReceiver dest)
           throws AdaptorException
Note that the name of the inner class will get parsed out as a type
Specified by:
start in interface Adaptor
type - the application type, who is starting this adaptor
offset - the stream offset of the first byte sent by this adaptor
Throws:
AdaptorException
public void add(Chunk event)
         throws InterruptedException
Description copied from interface: ChunkReceiver
Add a chunk to the queue, potentially blocking.
Specified by:
add in interface ChunkReceiver
Throws:
InterruptedException - if thread is interrupted while blocking
 void	addCreateHandler(ObjectWrapper.CreateListener listener) 
           
 java.lang.Object	createPrototype() 
           
 java.lang.Object	getObject() 
           
 java.lang.Class	getType() 
           
 ObjectWrapper	makeWrapper() 
           
 void	setObject(java.lang.Object obj) 
           
 void	setYamlConfig(YamlConfig config) 
           
 java.lang.String	toString() 

