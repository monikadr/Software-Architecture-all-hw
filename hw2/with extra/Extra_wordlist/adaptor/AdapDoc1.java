java.util.*
AdaptorShutdownPolicy

public static AdaptorShutdownPolicy[] values()
public static AdaptorShutdownPolicy valueOf(String name)
public static final AdaptorShutdownPolicy HARD_STOP
public static final AdaptorShutdownPolicy WAIT_TILL_FINISHED
public static final AdaptorShutdownPolicy GRACEFULLY
public static final AdaptorShutdownPolicy RESTARTING
static AdaptorShutdownPolicy
static AdaptorShutdownPolicy[]
SystemMetrics.shutdown(AdaptorShutdownPolicy shutdownPolicy) 
WriteaheadBuffered.shutdown(AdaptorShutdownPolicy p) 
ChukwaAgent.stopAdaptor(String name, AdaptorShutdownPolicy shutdownMode)
Stop the adaptor with given ID number.
Adaptor.shutdown(AdaptorShutdownPolicy shutdownPolicy)
Signals this adaptor to come to an orderly stop.
static AdaptorShutdownPolicy.valueOf(String name)
Returns the enum constant of this type with the specified name.
static AdaptorShutdownPolicy.values()
Returns an array containing the constants of this enum type, in the order they are declared.

