Constructor Summary

Constructors 
Constructor and Description
ClientTraceBean() 
Method Summary

Methods 
Modifier and Type	Method and Description
String	getAction() 
String	getDate() 
String	getDest() 
long	getSize() 
String	getSrc() 
void	setAction(String action) 
void	setDate(String date) 
void	setDest(String dest) 
void	setSize(long size) 
void	setSrc(String src) 
Methods inherited from class java.lang.Object
clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait
Constructor Detail

ClientTraceBean
public ClientTraceBean()
Method Detail

getAction
public String getAction()
setAction
public void setAction(String action)
getSrc
public String getSrc()
setSrc
public void setSrc(String src)
getDest
public String getDest()
setDest
public void setDest(String dest)
getSize
public long getSize()
setSize
public void setSize(long size)
getDate
public String getDate()
setDate
public void setDate(String date)
SKIP NAVIGATION LINKS OVERVIEWPACKAGECLASSUSETREEDEPRECATEDINDEXHELP PREV CLASSNEXT CLASSFRAMESNO FRAMESALL CLASSESSUMMARY: NESTED | FIELD | CONSTR | METHODDETAIL: FIELD | CONSTR | METHOD
org.apache.hadoop.chukwa.rest.bean
Class ClientTraceBean

java.lang.Object
org.apache.hadoop.chukwa.rest.bean.ClientTraceBean

public class ClientTraceBean
extends Object
Constructor Summary

Constructors
Constructor and Description
ClientTraceBean() 
Method Summary

All MethodsInstance MethodsConcrete Methods
Modifier and Type	Method and Description
String	getAction() 
String	getDate() 
String	getDest() 
long	getSize() 
String	getSrc() 
void	setAction(String action) 
void	setDate(String date) 
void	setDest(String dest) 
void	setSize(long size) 
void	setSrc(String src) 
Methods inherited from class java.lang.Object
clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait
Constructor Detail

ClientTraceBean
public ClientTraceBean()
Package	Description
org.apache.hadoop.chukwa.rest.resource	 
Uses of ClientTraceBean in org.apache.hadoop.chukwa.rest.resource

Methods in org.apache.hadoop.chukwa.rest.resource that return types with arguments of type ClientTraceBean
Modifier and Type	Method and Description
List<ClientTraceBean>	ClientTrace.getTrace()
Get a list of the most recent client trace activities.
