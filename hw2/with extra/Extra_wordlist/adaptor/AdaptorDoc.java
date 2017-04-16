
Package org.apache.hadoop.chukwa.datacollection.adaptor
Provides the classes for implementing Adaptor application
		
		AdaptorException
		The AdaptorException class defines a simple ServiceException type that is thrown on kind adaptation failures.
		public class DirTailingAdaptor
		extends AbstractAdaptor
		implements Runnable
		Explore a whole directory hierarchy, looking for files to tail. DirTailingAdaptor will not try to start tailing a file more than once, if the file hasn't been modified in the interim. 		Offset param is used to track last finished scan. Mandatory first parameter is a directory with an optional unix style file filter. Mandatory second parameter is the name of an adaptor 			to start. If the specified directory does not exist, the DirTailer will continue running, and will start tailing if the directory is later created.

		AdaptorShutdownPolicy
		java.lang.Object
		java.lang.Enum<AdaptorShutdownPolicy>
		org.apache.hadoop.chukwa.datacollection.adaptor.AdaptorShutdownPolicy
		All Implemented Interfaces:
		Serializable, Comparable<AdaptorShutdownPolicy>

		public enum AdaptorShutdownPolicy
		extends Enum<AdaptorShutdownPolicy>
AbstractWrapper
java.lang.Object
ru.stqa.selenium.wrapper.AbstractWrapper<T>
Direct Known Subclasses:
WebDriverWrapper, WebDriverWrapper.AlertWrapper, WebDriverWrapper.CoordinatesWrapper, WebDriverWrapper.KeyboardWrapper, WebDriverWrapper.MouseWrapper, WebDriverWrapper.NavigationWrapper, WebDriverWrapper.OptionsWrapper, WebDriverWrapper.TargetLocatorWrapper, WebDriverWrapper.TimeoutsWrapper, WebDriverWrapper.TouchScreenWrapper, WebDriverWrapper.WebElementWrapper, WebDriverWrapper.WindowWrapper

public abstract class AbstractWrapper<T>
extends java.lang.Object

DirTailingAdaptor
public class DirTailingAdaptor
extends AbstractAdaptor
implements Runnable
Explore a whole directory hierarchy, looking for files to tail. DirTailingAdaptor will not try to start tailing a file more than once, if the file hasn't been modified in the interim. Offset param is used to track last finished scan. Mandatory first parameter is a directory with an optional unix style file filter. Mandatory second parameter is the name of an adaptor to start. If the specified directory does not exist, the DirTailer will continue running, and will start tailing if the directory is later created.
