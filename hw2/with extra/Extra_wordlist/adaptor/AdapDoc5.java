DirTailingAdaptor

java.lang.Object
org.apache.hadoop.chukwa.datacollection.adaptor.AbstractAdaptor
org.apache.hadoop.chukwa.datacollection.adaptor.DirTailingAdaptor

public class DirTailingAdaptor
extends AbstractAdaptor
implements Runnable
Explore a whole directory hierarchy, looking for files to tail. DirTailingAdaptor will not try to start tailing a file more than once, if the file hasn't been modified in the interim. Offset param is used to track last finished scan. Mandatory first parameter is a directory with an optional unix style file filter. Mandatory second parameter is the name of an adaptor to start. If the specified directory does not exist, the DirTailer will continue running, and will start tailing if the directory is later created.

DirTailingAdaptor() 
protected String	getAdaptorAddCommand(File dir) 
String	getCurrentStatus()
Return the adaptor's state Should not include class name or byte offset, which are written by caller.
protected org.apache.commons.io.filefilter.IOFileFilter	getFileFilter()
Returns IOFileFilter constructed using the wild character.
String	parseArgs(String status) 
void	run() 
long	shutdown(AdaptorShutdownPolicy shutdownPolicy)
Signals this adaptor to come to an orderly stop.
void	start(long offset)
protected String adaptorName
public void start(long offset)
           throws AdaptorException
Specified by:
start in class AbstractAdaptor
Throws:
AdaptorException
run
public void run()
Specified by:
run in interface Runnable
getAdaptorAddCommand
protected String getAdaptorAddCommand(File dir)
                               throws IOException
Throws:
IOException
getCurrentStatus
public String getCurrentStatus()
Description copied from interface: Adaptor
Return the adaptor's state Should not include class name or byte offset, which are written by caller. The datatype should, however, be written by this method.
Specified by:
getCurrentStatus in interface Adaptor
Returns:
the adaptor state as a string
parseArgs
public String parseArgs(String status)
Specified by:
parseArgs in class AbstractAdaptor
shutdown
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
getFileFilter
protected org.apache.commons.io.filefilter.IOFileFilter getFileFilter()
Returns IOFileFilter constructed using the wild character. Subclasses can override this method return their own version of IOFileFilter instance.
Returns:
IOFileFilter constructed using the wild character. Subclasses can override this method return their own version of IOFileFilter instance.
