AdaptorException

java.util.*
com.google.gdata.data.Kind.AdaptorException
public Kind.AdaptorException(java.lang.String message)
public Kind.AdaptorException(java.lang.String message,java.lang.Throwable cause)
public Kind.AdaptorException(java.lang.Throwable cause)
AdaptorException(FailureCode errorCode)
Creates new exception instance.
AdaptorException(FailureCode errorCode, java.lang.String message)
Creates new exception instance.
AdaptorException(FailureCode errorCode, java.lang.String message, java.lang.Throwable cause)
Creates new exception instance.
AdaptorException(FailureCode errorCode, java.lang.Throwable cause)
Creates new exception instance.
void getErrorCode()
Gets error code for the exception.
void	setErrorCode(FailureCode errorCode)
Sets error code for the exception.

public AdaptorException(FailureCode errorCode,
                java.lang.String message)
Creates new exception instance.
Parameters:
errorCode - Error code indicating exact cause of this exception.
message - Exception message used for logging or debugging.
public AdaptorException(FailureCode errorCode,
                java.lang.String message,
                java.lang.Throwable cause)
Creates new exception instance.
Parameters:
errorCode - Error code indicating exact cause of this exception.
message - Exception message used for logging or debugging.
cause - Reason the exception was thrown.
public FailureCode getErrorCode()
Gets error code for the exception.
Returns:
Error code indicating exact cause of this exception.
public void setErrorCode(FailureCode errorCode)
Sets error code for the exception.
Parameters:
errorCode - Error code indicating exact cause of this exception.
